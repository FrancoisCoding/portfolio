import React from 'react';

export default function(Component) {
    return class withAuth extends React.Component {
        alertMessage() {
            alert('SOME MESSAGE!!!!!!!!!');
        }

        render() {
            const someVariable1 = '1';
            const someVariable2 = '2';
            return (
                <Component
                    alertMessage={this.alertMessage}
                    someVariable1={someVariable1}
                    someVariable2={someVariable2}
                    {...this.props}
                />
            );
        }
    };
}
