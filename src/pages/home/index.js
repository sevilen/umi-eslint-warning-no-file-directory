import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'home'
        };
    }

    render() {
        return (
            <div>
                { this.state.name }
            </div>
        )
    }
}

export default Home;