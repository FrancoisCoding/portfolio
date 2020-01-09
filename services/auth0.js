import auth0 from 'auth0-js';
import Router from 'next/router';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';

class Auth0 {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-muyfhpy4.auth0.com',
            clientID: '1gbOuVc9mDL2rfsmbsDFGOPbWH0eB2oT',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (
                    authResult &&
                    authResult.accessToken &&
                    authResult.idToken
                ) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        });
    }

    setSession(authResult) {
        // debugger;
        // Set the time that the Access Token will expire at
        const conversion = authResult.expiresIn * 1000;
        const expiresAt = JSON.stringify(conversion + new Date().getTime());
        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');
        this.auth0.logout({
            returnTo: '',
            clientID: '1gbOuVc9mDL2rfsmbsDFGOPbWH0eB2oT'
        });
    }

    login() {
        this.auth0.authorize();
    }

    async getJWKS() {
        const res = await axios.get(
            'https://dev-muyfhpy4.auth0.com/.well-known/jwks.json'
        );
        const jwks = res.data;
        return jwks;
    }

    async verifyToken(token) {
        if (token) {
            const decodedToken = jwt.decode(token, { complete: true });
            const jwks = await this.getJWKS();
            const jwk = jwks.keys[0];
            // BUILD CERTIFICATE
            let cert = jwk.x5c[0];
            cert = cert.match(/.{1,64}/g).join('\n');
            cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
            //

            if (jwk.kid === decodedToken.header.kid) {
                try {
                    const verifiedToken = jwt.verify(token, cert);
                    const expiresAt = verifiedToken.exp * 1000;
                    const currentTime = new Date();
                    return verifiedToken && currentTime.getTime() < expiresAt
                        ? decodedToken
                        : undefined;
                } catch (err) {
                    return undefined;
                }
            }
            const expiresAt = decodedToken.exp * 1000;
            const currentTime = new Date();
            return decodedToken && currentTime.getTime() < expiresAt
                ? decodedToken
                : undefined;
        }

        return undefined;
    }

    async clientAuth() {
        const token = Cookies.getJSON('jwt');
        const verifiedToken = this.verifyToken(token);
        return verifiedToken;
    }

    async serverAuth(req) {
        if (req.headers.cookie) {
            const tokenCookie = req.headers.cookie
                .split(';')
                .find(c => c.trim().startsWith('jwt='));
            if (!tokenCookie) {
                return undefined;
            }
            const token = tokenCookie.split('=')[1];
            const verifiedToken = await this.verifyToken(token);

            const currentTime = new Date();
            return verifiedToken;
        }
        return undefined;
    }
}

const auth0Client = new Auth0();

export default auth0Client;
