import React, { Component } from 'react';

class register extends Component {
    render() {
        return (
            <div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-37">
                            Register
            </span>
                        <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
                            <input className="input100" type="text" name="username" placeholder="username or email" />
                            <span className="focus-input100" />
                        </div>
                        <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
                            <input className="input100" type="password" name="pass" placeholder="password" />
                            <span className="focus-input100" />
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Register
              </button>
                        </div>
                        <div className="text-center p-t-57 p-b-20">
                            <span className="txt1">
                                Or login with
              </span>
                        </div>
                        <div className="flex-c p-b-112">
                            <a href="#" className="login100-social-item">
                                <i className="fa fa-facebook-f" />
                            </a>
                            <a href="#" className="login100-social-item">
                                <img src="login/images/icons/icon-google.png" alt="GOOGLE" />
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="#" className="txt2 hov1">
                                Register
              </a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default register;
