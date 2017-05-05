import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style/layout.scss'

import { Provider } from 'react-redux'
import store from './../store'
import LoginForm from './LoginForm.jsx'
import Screen from './Screen.jsx'

class Wrap extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div className="wrap-page">
                <div className="cricle-content">
                    <div className="cricle"></div>
                    <div className="cricle-item"></div>
                </div>

                <LoginForm />

                <Screen />
            </div>
        );
    }
}

Wrap.protoType = {

}

ReactDOM.render(<Wrap />, document.getElementById("app"));