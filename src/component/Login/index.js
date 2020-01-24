import React, {Component} from "react"
import "./style.scss"

class Login extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false;
        const token = localStorage.getItem('token');
        if (token) loggedIn = true;

        this.state = {
            login: null,
            password: null,
            loggedIn
        }
        this.OnChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="login">
                <div className="text">
                    <h1> TMS Beiersdorf </h1>
                    <div> TMS для компании Beiersdorf</div>
                </div>

                <form className="login_form">
                    <input type="text" placeholder='login' value={this.state.login} onChange={this.onChange} name='login'/>
                    <input type='password' placeholder='password' value={this.state.password} onChange={this.onChange} name='password'/>
                    <button type="submit">Войти</button>
                </form>

            </div>
        )
    }
}

export default Login