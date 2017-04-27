import React from 'react';
import InputSelect from './InputSelect';
import InputName from './InputName';


class AssembleAttribut extends React.Component {
    render() {
        return (
            <div className="assembleAttribute col-md-12">
                <InputName /> <InputSelect />
            </div>

        );
    }
}

export default AssembleAttribut;