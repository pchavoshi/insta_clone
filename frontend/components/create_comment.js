import React from 'react';

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createComment = this.createComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }

  update(field) {
    console.log(field);
    return e => {
      console.log(e.target.value);
      this.setState({ [field]: e.target.value });
      console.log(this.state);
    };
  }

  createComment() {
    this.props.sendComment({
      user_id: this.props.currentUser.id,
      content: this.state.content,
      photo_id: this.props.photo.id
    });
  }

  editComment() {
    console.log('editComment', this.props.comment);
    console.log('editComment', this.state);
    this.props.sendComment({
      id: this.props.comment.id,
      user_id: this.props.comment.user_id,
      photo_id: this.props.comment.photo_id,
      content: this.state.content
    });
  }

  handleSubmit(e) {
    this.props.formType === 'Edit Comment'
      ? this.editComment()
      : this.createComment();

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
