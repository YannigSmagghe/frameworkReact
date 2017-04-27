import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/monokai';

class ObjectRender extends React.Component {
    render() {
        return (
                <AceEditor
                mode="html"
                theme="monokai"
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                />
        );
    }
}

export default ObjectRender;