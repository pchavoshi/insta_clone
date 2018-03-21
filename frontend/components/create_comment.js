import React from 'react';
import { Redirect } from 'react-router-dom'; 

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
  
  componentDidMount() {
    this.setState({content: this.props.comment.content}); 
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
    this.props.history.replace(`/photos/${this.props.comment.photo_id}`);
    this.props.closeEdit(); 
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
            placeholder={this.props.formType}
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
