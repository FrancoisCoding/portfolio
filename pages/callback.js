import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

export const Callback = () => {
    return (
        <div>
            <BaseLayout>
                <BasePage>
                    <h1>Verifying login data ... </h1>
                </BasePage>
            </BaseLayout>
        </div>
    );
};
