import React from 'react';
import CommentIndex from './comment_index';
import { CreateCommentContainer } from './create_comment_container';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  render() {
    return (
      <div>
        <img src={this.props.photo.image} />
        <h1>Comments:</h1>
        <CommentIndex props={Object.values(this.props.comments)} />
        <CreateCommentContainer />
      </div>
    );
  }
}

export default PhotoShow;
