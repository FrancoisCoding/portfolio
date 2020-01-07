import auth0 from 'auth0-js';

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
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                console.log(err);
            }
        });
    }

    setSession() {
        // Save tokens !!!!!!!!!!
    }

    login() {
        this.auth0.authorize();
    }
}

const auth0Client = new Auth0();

export default auth0Client;
