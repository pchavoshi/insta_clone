import React from 'react';

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
          <img src="https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-7-plus/gold/Apple-iPhone7-Plus-Gold-1-3x.jpg" />
          <div className="session-bar">
            <div className="session-container">
              <h1>shiba-gram</h1>

              <p> {this.props.formType}</p>
              {this.props.formType === 'Sign up' ? (
                <p> to see photos and videos from your friends.</p>
              ) : (
                ''
              )}

              <form onSubmit={this.handleSubmit}>
                <div className="session-input">
                  <input
                    type="text"
                    value={this.state.username}
                    placeholder="Username"
                    onChange={this.update('username')}
                  />

                  <input
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update('password')}
                  />

                  <input type="submit" value={this.props.formType} />
                </div>
              </form>

              {this.props.formType === 'Sign up' ? (
                <p>By signing up, you agree that you are a Good Boy! </p>
              ) : (
                ''
              )}
              {this.renderErrors()}
            </div>

            {this.props.navLink}
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
