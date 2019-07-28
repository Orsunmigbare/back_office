import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
                
                <div className="site-mobile-menu">
                    <div className="nav-container w-100">
                        <div className="avatar-wrap">
                            <img src="images/user.png" className="avatar d-block" />
                            <span className="username">
                                John Doe
                            </span>
                        </div>
                        <ul className="nav">
                            <li className="nav-item text-center">
                                <Link to="/createarticle" className="active"> <i className="fas fa-plus text-icon " /> Create article</Link></li>
                            <li className="nav-item text-center">
                                <Link to="/editarticle"><i className="far fa-edit text-icon" />Edit article</Link>
                            </li>
                            <li className="nav-item text-center">
                                <Link to="/deletearticle"><i className="far fa-trash-alt text-icon" />Delete article</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
        )
    }
}

export default SideBar