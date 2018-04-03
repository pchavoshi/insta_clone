import React from 'react';
import CommentIndexContainer from './comment_index_container';

class PhotoShow extends React.Component {
  componentDidMount() {
    if (this.props.modal !== 'notModal')
      this.props.getPhoto(this.props.modal.id);
  }

  render() {
    console.log('this.props:', this.props);
    return (
      <div className={`${this.props.photoShow}`}>
        <img src={this.props.photo.image} />
        <img src={window.comment} />
        <h3>{this.props.photo.caption}</h3>
        <h1>Comments:</h1>
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
