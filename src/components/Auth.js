import React, { Component } from 'react';
import Query from '../Query';
import {UserContext} from '../context/UserContext';
import {withRouter} from 'react-router-dom';

class Auth extends Component {
    
    state = {
        username: '',
        password: '',
        loading: false,
        context: 'login'
    }

   login =(update_id, credentials)=>{
        let {username, password} = credentials;
        if(!username || !password) return
            this.setState(({loading: true}))
            Query.login({username,password}).then(async res=>{ 
                console.log(res)
                sessionStorage.setItem('user_id',res.data.user_id)
                await update_id(sessionStorage.getItem('user_id'));
                this.props.history.push('/createarticle')
                this.setState(({loading: false}))
            })
        .catch(err=>{
            console.log(err);
            this.setState(({loading: false}))
        })
    }
    sign_up = (update_id,user_id, credentials)=>{
        // let {firstname, lastname, email, username, password, confirm_password} = credentials;
        this.setState(({loading: true}))
        Query.login(credentials).then(async res=>{ 
            console.log(res)
            sessionStorage.setItem('user_id',res.data.user_id)
            await update_id(sessionStorage.getItem('user_id'));
            this.props.history.push('/createarticle')
        })
    .catch(err=>{
        console.log(err)
        this.setState(({loading: false}))
    })
    }

    change_context = (context)=>{
        this.setState({context})
    }


    render() {
        let {context, loading} = this.state
        return (
         context === 'login' ? <Login login = {this.login} loading= {loading} change_context={this.change_context}/> : <SignUp change_context={this.change_context}  loading={loading} sign_up = {this.sign_up}/>
        )
    }
}

class Login extends Component {
     state = {
         username: '',
         password: ''
     }

    render(){
        let {login, change_context, loading} = this.props;
        let {username, password} = this.state;
        return(
            <div className="main-content-area w-100 mx-0">
            <div className="card mx-auto">
                <h2> Sign in</h2>
                <div className="card-item">
                    <h3> Username</h3>
                    <div className="input-wrap w-100">
                        <input type="text" className="input-primary w-100" placeholder="Eg: JohnDoe" onChange={(e)=>{this.setState({username: e.target.value})}} />
                    </div>
                </div>
                <div className="card-item">
                    <h3>Password</h3>
                    <div className="input-wrap w-100">
                        <input type="password" className="input-primary w-100" placeholder="Input Password" onChange={(e)=>{this.setState({password: e.target.value})}} />
                    </div>
                </div>
                <div className="btn-wrap">
                    <UserContext.Consumer>
                        {({update_id,user_id})=>(
                                <a href="#" className="btn btn-primary mt-2 d-inline-block btn-next" onClick={()=>{login(update_id,{username,password})}}> {loading ?  <i className="fas fa-circle-notch fa-spin" /> : 'Login'} </a>
                        )}
                    </UserContext.Consumer>
                    
                </div>
                <a style={{marginTop: '15px', cursor: 'pointer'}} onClick={()=>{change_context('sign_up')}}> Don't have an account ? Sign Up </a>
            </div>
        </div>
        )
    }
}

class SignUp extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        confirm_password: " ",
    }
    render() {
        let {sign_up, change_context, loading} = this.props;
        let {firstname,lastname,email,username,password} = this.state;
        return (
            <div className="main-content-area w-100 mx-0">
                <div className="card mx-auto">
                    <h2> Sign up</h2>
                    <div className="card-item">
                        <h3> First name</h3>
                        <div className="input-wrap w-100">
                            <input type="text" className="input-primary w-100" placeholder="Eg: John" />
                        </div>
                    </div>
                    <div className="card-item">
                        <h3> Last name</h3>
                        <div className="input-wrap w-100">
                            <input type="text" className="input-primary w-100" placeholder="Eg: Doe" />
                        </div>
                    </div>
                    <div className="card-item">
                        <h3> Email </h3>
                        <div className="input-wrap w-100">
                            <input type="email" className="input-primary w-100" placeholder="Eg: johndoe@example.com" />
                        </div>
                    </div>
                    <div className="card-item">
                        <h3> Choose Username </h3>
                        <div className="input-wrap w-100">
                            <input type="email" className="input-primary w-100" placeholder="Eg: JohnDoe" />
                        </div>
                    </div>
                    <div className="card-item">
                        <h3>Password</h3>
                        <div className="input-wrap w-100">
                            <input type="password" className="input-primary w-100" placeholder="Input Password" />
                        </div>
                    </div>
                    <div className="card-item">
                        <h3>Confirm Password</h3>
                        <div className="input-wrap w-100">
                            <input type="password" className="input-primary w-100" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className="btn-wrap">
                       <UserContext.Consumer>
                        {({update_id,user_id})=>(
                                <a href="#" className="btn btn-primary mt-2 d-inline-block btn-next" onClick={()=>{sign_up(update_id,{firstname,lastname,email,username,password})}}>{loading ?  <i className="fas fa-circle-notch fa-spin" /> : 'Sign Up'} </a>
                        )}
                    </UserContext.Consumer>
                    </div>
                    <a style={{marginTop: '15px', cursor: 'pointer'}}  onClick={()=>{change_context('login')}}> Already have an account ? Login </a>
                    </div>
                    </div>
        )
    }
}


export default withRouter(Auth)