import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password:'' })
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account bitch?</h2>
                <span> Wanna sign in with your email bruh? enter 'em here yo!</span>

                <form onSubmit={this.handleSubmit}>
                  <input 
                  name='email' 
                  type='email' 
                  value={this.state.email} 
                  onChange={this.handleChange}
                  required />  
                  <label>E-mail</label>

                  <input 
                  name='password' 
                  type='password' 
                  value={this.state.email} 
                  onChange={this.handleChange}
                  required />  
                  <label>Password</label>

                  <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}

export default SignIn;