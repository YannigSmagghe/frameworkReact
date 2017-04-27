import React from 'react';


class InputName extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <p className="attributenName">
                    <span className="col-md-4">Attribute : </span>
                    <input className="input-group col-md-8"
                           name="inputAttribute" />
                </p>
            </div>
        );
    }
}

export default InputName;