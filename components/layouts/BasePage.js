import React from 'react';
import Header from '../shared/Header';
import { Container } from 'reactstrap';

const BasePage = ({ children }) => {
    return (
        <div className='base-page'>
            <Container>{children}</Container>
        </div>
    );
};

export default BasePage;
