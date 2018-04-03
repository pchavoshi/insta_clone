import React from 'react';
import CommentIndexContainer from './comment_index_container';

class PhotoShow extends React.Component {
  componentDidMount() {
    if (this.props.modal !== 'notModal')
      this.props.getPhoto(this.props.modal.id);
  }

  render() {
    return (
      <div className="photo-show">
        <img src={this.props.photo.image} className="photo" />
        <img src={window.comment} className="icons" />
        <div className="comment">
          <span className="username">{this.props.photoUser.username}</span>
          <span className="content">{this.props.photo.caption}</span>
        </div>

        <CommentIndexContainer
          comments={this.props.comments}
          photoId={this.props.photo.id}
          commentIndex={this.props.commentIndex}
          indexItem={this.props.indexItem}
        />
      </div>
    );
  }
}

export default PhotoShow;
