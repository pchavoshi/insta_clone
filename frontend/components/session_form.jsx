import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
        this.setState({[field]: e.target.value});
      };
    }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, index) =>
          <li key={`index`}>
            {error}
          </li>
        )}
      </ul>
    );
  }

  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Please {this.props.formType}

          {this.renderErrors()}

          <label>Username
            <input type="text" value={this.state.username} onChange={this.update("username")}/>
          </label>

          <label>Password
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>

          <input type="submit" value={this.props.formType} />

            {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default SessionForm;
