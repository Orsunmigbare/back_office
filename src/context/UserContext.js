import React, {Component} from 'react';

export const UserContext = React.createContext({})
export const UserConsumer = UserContext.Consumer;

class UserProvider extends Component {
    state = {
        user_id: '',
    }
    update_id = async (id)=>{await this.setState({user_id: id});}
    render(){
        let value = {
            user_id : ()=>{ return sessionStorage.getItem('user_id')} ,
            update_id: this.update_id,
            clear_user: this.clear_user
        }
        return(
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;