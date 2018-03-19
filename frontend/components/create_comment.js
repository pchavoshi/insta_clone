import React from 'react';

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    this.props.sendComment({
      user_id: this.props.currentUser.id,
      content: this.state.content,
      photo_id: this.props.photo.id
    });
    this.setState({ content: '' });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.content}
            placeholder="Add Comment"
            onChange={this.update('content')}
          />
          <button type="button" onClick={this.handleSubmit}>
            {this.props.formType}
          </button>
        </form>
      </div>
    );
  }
}

export default CreateComment;
