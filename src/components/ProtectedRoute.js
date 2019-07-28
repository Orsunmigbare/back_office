import React, {Component} from 'react';
import {UserConsumer} from '../context/UserContext';
import Route from 'react-router-dom/Route';
import TransitionElement from './TransitionElement';
import CreateArticle from './CreateArticle';
import Auth from './Auth';

class ProtectedRoute extends Component {
    render(){
        let {path, component} = this.props;
        return(
         <UserConsumer>
         { ({user_id}) =>(
         <Route
        path= {path}
        // component = {CreateArticle}
        exact = {true}
        >
          {({match})=>(
            <TransitionElement
            in = {match != null}
            transClass = {'page'}
            child = {user_id()? component : <Auth/>}
            />
          )}
        </Route>
         )
        }
          </UserConsumer>
        )
    }
}

export default ProtectedRoute