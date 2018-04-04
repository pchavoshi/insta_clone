import React from 'react';
import CommentIndexContainer from './comment_index_container';
import UserHeader from './user_header';

class PhotoShow extends React.Component {
  // componentDidMount() {
  //   if (this.props.modal !== 'notModal')
  //     this.props.getPhoto(this.props.modal.id);
  // }



  render() {
    return (
      <div  className="photo-show">
        <div className="container">
          <img src={this.props.photo.image} className="photo" />
          {this.props.modal === 'notModal' ? (
            <label htmlFor={this.props.photo.id}>
              <img src={window.comment} className="icons" />
            </label>
          ) : ('') }
        <div className="allComments">
          <div className="container">
          {this.props.isModal === 'true' ? (
          <div className="photo-bar">
              <UserHeader user={this.props.photoUser}/>
              <hr/>
          </div>
          ) : (
            ''
          )}
          <div className="comment">
            <span className="username">{this.props.photoUser.username}</span>
            <span className="content">{this.props.photo.caption}</span>
          </div>
          <CommentIndexContainer
            comments={this.props.comments}
            photoId={this.props.photo.id}
            commentIndex={this.props.commentIndex}
            indexItem={this.props.indexItem}
            isModal={this.props.isModal}
          />
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default PhotoShow;
