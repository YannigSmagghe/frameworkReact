import React from 'react';


class InputTableName extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <p className="tableName">
                    <span className="col-md-4">Object Name  : </span>
                    <input className="input-group col-md-8"
                           name="inputTableName" />
                </p>
            </div>
        );
    }
}

export default InputTableName;