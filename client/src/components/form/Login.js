import React, { Component, setState  } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: ""
        }
    }
  
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }


    submission(event, val){
        event.preventDefault()
        console.log("it's been submitted" , this.state)
    }

    render(){
        return(
            <React.Fragment>
                <Form onSubmit={(val) => this.submission(val)}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.handleEmailChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={this.handlePasswordChange}/>
                    </FormGroup>
                    
                    <Button color="primary">Submit</Button>
                </Form>
            </React.Fragment>
        )
    }

}

export default Login;