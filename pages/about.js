import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import { Row, Col } from 'reactstrap';

class About extends React.Component {
    render() {
        return (
            <BaseLayout title='Isaiah Francois - Learn More About Me'>
                <BasePage className='about-page'>
                    <Row className='mt-5'>
                        <Col md='6'>
                            <div className='left-side'>
                                <h1 className='title fadein'>Hello, welcome </h1>
                                <h4 className='subtitle fadein'>
                                To my corner of the internet!
                                </h4>
                                <p className='subsubTitle fadein'>
                                    Feel free to read short description about
                                    me.
                                </p>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className='fadein'>
                                <p>
                                    My name is Isaiah Francois and I am an
                                    experienced software engineer and freelance
                                    developer.
                                </p>
                                <p>
                                    I have developed a <Link to='/projects'>vast amount of
                                    applications </Link> with different techologies
                                    individually and with numerous teams.
                                </p>
                                <p>
                                    Throughout my career, I have acquired
                                    advanced technical knowledge and the ability
                                    to explain programming topics clearly and in
                                    detail to a broad audience.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default About;
