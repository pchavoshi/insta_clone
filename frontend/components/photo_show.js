import React from 'react';
import CommentIndexContainer from './comment_index_container';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.getPhoto(this.props.modal.id);
  }

  render() {
    return (
      <div>
        <img src={this.props.photo.image} />
        <h1>Comments:</h1>
        <CommentIndexContainer comments={this.props.comments} photoId={this.props.photo.id}/>
      </div>
    );
  }
}

export default PhotoShow;
