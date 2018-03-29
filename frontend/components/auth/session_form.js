import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, index) => (
          <li key={`index`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sessions">
        <div className="container">
          <img id="sakura" src={window.sakura} ></img>
          <div className="box fone">
            <img src="https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-7-plus/gold/Apple-iPhone7-Plus-Gold-1-3x.jpg" />
          </div>
          <div className="box">
            <div className="main field">


                  <div className="top">
                    <img id="title" src={window.logo}></img>

                  <div className="text intro">
                    {this.props.formType === 'Sign up' ? <h2>Sign up to see photos and videos from your friends.</h2> : <p>Login</p>}
                  </div>


                  </div>

                  <div className="middle">
                    <form onSubmit={this.handleSubmit}>
                      <div className="session-input">
                        <input
                          className="txtField"
                          type="text"
                          value={this.state.username}
                          placeholder="Username"
                          onChange={this.update('username')}
                        />

                        <input
                          className="txtField"
                          type="password"
                          value={this.state.password}
                          placeholder="Password"
                          onChange={this.update('password')}
                        />

                      <button type="button" onClick={this.props.userDemo}>Demo Login</button>

                        <input
                          className="txtField"
                          type="submit"
                          value={this.props.formType}
                        />
                      </div>
                    </form>

                    {this.props.formType === 'Sign up' ? (
                      <p className="text">
                        By signing up, you agree you are a Good Boy!
                      </p>
                    ) : (
                      ''
                    )}
                    {this.renderErrors()}

                  </div>
            </div>
            <div className="sub field">

              <Link onClick={this.props.removeSessionErrors} to={ (this.props.formType === 'Sign up') ? '/login' : '/signup' }>
                {this.props.formType === 'Sign up' ? 'Have an account? Log in' : "Don't have an account? Sign Up"}
              </Link>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
