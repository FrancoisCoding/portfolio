import React, { useEffect } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
import auth0Client from '../services/auth0';
import Router from 'next/router';

const Callback = () => {
    useEffect(() => {
        auth0Client
            .handleAuthentication()
            .then(res => {
                Router.push('/');
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <BaseLayout>
            <BasePage>
                <h1>Verifying login data ... </h1>
            </BasePage>
        </BaseLayout>
    );
};

export default Callback;
