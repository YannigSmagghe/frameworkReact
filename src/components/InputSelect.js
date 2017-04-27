import React from 'react';
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
class InputSelect extends React.Component {

    render() {
        const Select = require('react-select');

        const options = [
            { value: 'VARCHAR(255)', label: 'VARCHAR(255)' },
            { value: 'TINYINT', label: 'TINYINT' },
            { value: 'TEXT', label: 'TEXT' },
            { value: 'DATE', label: 'DATE' },
            { value: 'SMALLINT', label: 'SMALLINT' },
            { value: 'MEDIUMINT', label: 'MEDIUMINT' },
            { value: 'INT', label: 'INT' },
            { value: 'BIGINT', label: 'BIGINT' },
            { value: 'FLOAT', label: 'FLOAT' },
            { value: 'DOUBLE', label: 'DOUBLE' },
            { value: 'DECIMAL', label: 'DECIMAL' },
            { value: 'DATETIME', label: 'DATETIME' },
            { value: 'TIMESTAMP', label: 'TIMESTAMP' },
            { value: 'TIME', label: 'TIME' },
            { value: 'YEAR', label: 'YEAR' },
            { value: 'CHAR(255)', label: 'CHAR(255)' },
            { value: 'TINYBLOB', label: 'TINYBLOB' },
            { value: 'TINYTEXT', label: 'TINYTEXT' },
            { value: 'BLOB', label: 'BLOB' },
            { value: 'MEDIUMBLOB', label: 'MEDIUMBLOB' },
            { value: 'MEDIUMTEXT', label: 'MEDIUMTEXT' },
            { value: 'LONGBLOB', label: 'LONGBLOB' },
            { value: 'LONGTEXT', label: 'LONGTEXT' },
            { value: 'BINARY', label: 'BINARY' },
            { value: 'OTHER', label: 'OTHER...' },
            { value: 'HASMANY', label: '{ CHILD }' },
            { value: 'BELONGSTO', label: '{ PARENT }' },
            { value: 'JOIN', label: '{ SIBLING }' },
        ];

        function logChange(val) {
            console.log("Selected: " + val);
        }

        return (
            <div className="selectAttribute col-md-6">
                <span className="col-md-4 middle">Type : </span>
                <Select
                    className="col-md-8"
                    name="inputSelect"
                    value="VARCHAR(255)"
                    options={options}
                />
            </div>

        )
    }
}
export default InputSelect;