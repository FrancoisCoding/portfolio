import React from 'react';
import App, { Container } from 'next/app';
import { ToastContainer } from 'react-toastify';
import Fonts from '../helpers/Fonts';

import auth0 from '../services/auth0';

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            try {
                pageProps = await Component.getInitialProps(ctx);
            } catch (e) {
                console.error(e);
            }
        }

        const isSiteOwner =
            user && user[process.env.NAMESPACE + '/role'] === 'siteOwner';
        const auth = { user, isAuthenticated: !!user, isSiteOwner };

        return { pageProps, auth };
    }

    componentDidMount() {
        // Fonts();
    }

    render() {
        const { Component, pageProps, auth } = this.props;

        return (
            <Container>
                <ToastContainer />
                <Component {...pageProps} auth={auth} />
            </Container>
        );
    }
}
