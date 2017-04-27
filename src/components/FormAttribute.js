import React from 'react';
import AssembleAttribut from './AssembleAttribut';
import InputTableName from './InputTableName';

class FormAttribute extends React.Component {
    render() {
        return (
            <div >
                <p>Formulaire de nouveau model</p>
                <p><InputTableName /></p>
                <AssembleAttribut/>

            </div>

        );
    }
}

export default FormAttribute;