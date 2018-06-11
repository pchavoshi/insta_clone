import React from 'react';
import { Redirect } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createComment = this.createComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }

  componentWillMount() {
    this.setState({ content: this.props.comment.content });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
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
    this.props.sendComment({
      id: this.props.comment.id,
      user_id: this.props.comment.user_id,
      photo_id: this.props.comment.photo_id,
      content: this.state.content
    });
    this.props.closeEdit();
  }

  handleSubmit(e) {
    this.props.formType === 'Edit Comment'
      ? this.editComment()
      : this.createComment();

    this.setState({ content: '' });
  }

    stopPropagation (e) {
    e.stopPropagation();
    }

  render() {
    return (
      <div onClick={this.stopPropagation}>

          <div className={this.props.modalChild} >
          <div>
          <form>
            <input
              id={this.props.photoId}
              className="comment-field"
              type="textarea"
              value={this.state.content}
              placeholder={this.props.formType}
              onChange={this.update('content')}
            />
            <input
              className="comment-submit"
              type="submit"
              onClick={this.handleSubmit}
              value={this.props.formType}
            />
          </form>
        </div>

        </div>
      </div>

    );
  }
}

export default CommentForm;
