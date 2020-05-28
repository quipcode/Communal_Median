import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import {connect} from 'react-redux';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <div>
                <p>Hello there</p>
            </div>

        )
    }

}

export default withRouter(connect(null, null)(Main))