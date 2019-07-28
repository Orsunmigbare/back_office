import React, { Component } from 'react';

class SignUp extends Component {
    render() {
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
                        <a href="#" className="btn btn-primary mt-2 d-inline-block btn-next"> Sgin Up </a>
                    </div>
                </div>
            </div>


        )
    }
}

export default Login