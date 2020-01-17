import React from 'react';
import App, { Container } from 'next/app';
import { ToastContainer } from 'react-toastify';
import Fonts from '../helpers/Fonts';

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount() {
        // Fonts();
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <ToastContainer />
                <Component {...pageProps} />
            </Container>
        );
    }
}
