import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'login',
        }
    }


    render() {
        return (
            <div>
                <a href="#">{ this.state.name }</a>
            </div>
        )
    }
}

export default Login;