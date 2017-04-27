import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import FormAttribute from './components/FormAttribute';
import ObjectRender from './components/ObjectRender';
// CSS
import './index.css';
import './style/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to EasyMvC</h2>
                </div>
                <aside className="col-md-2">
                    Component menu / aside
                </aside>
                <div className="col-md-5">
                    <FormAttribute />
                </div>
                <div className="col-md-5">
                    <ObjectRender />
                </div>

            </div>
        );
    }
}

export default App;
