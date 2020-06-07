import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom';
import {connect} from 'react-redux';
// import Navbar from './navigation/Navbar'
import Navigation from './layout/Navigation'

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            
            <div>
                <Navigation auth={true}/>
                <Switch>
                    <Route></Route>
                </Switch>
                <p>Hello there</p>
            </div>

        )
    }

}

export default withRouter(connect(null, null)(Main))