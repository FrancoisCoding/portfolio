import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Portfolios extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>I am Portfolios Page</h1>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Portfolios;
