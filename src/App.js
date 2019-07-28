import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SideBar from './components/SideBar';
import Auth from './components/Auth';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import DeleteArticle from './components/DeleteArticle';
import {UserContext} from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {


componentDidMount(){

}

  render(){
    return (
      <div class="class-wrap">    
      <Router>
        <UserContext.Consumer>
         { ({user_id}) =>{
           console.log(user_id())
          return user_id() ? <SideBar/>: ''
        }
      }
        </UserContext.Consumer>

        <UserContext.Consumer>
         { ({user_id}) =>(
        <Route
        path= {'/'}
        component = {user_id() ? CreateArticle : Auth}
        // component = {CreateArticle}
        exact = {true}
        />
         )
    }
      </UserContext.Consumer>


         <ProtectedRoute
         path = {'/createarticle'}
         component = {<CreateArticle/>}
         />
          <ProtectedRoute
         path = {'/editarticle'}
         component = {<EditArticle/>}
         />
         <ProtectedRoute
         path = {'/deletearticle'}
         component = {<DeleteArticle/>}
         />
      </Router>
      </div>
    );
  }
  
}

export default App;
