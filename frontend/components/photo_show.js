import React from 'react';
import CommentIndexContainer from './comment_index_container';
import UserHeader from './user_header';

const PhotoShow = props => {
    return (
      <div  className="photo-show">
        <div className="container">
          <img src={props.photo.image} className="photo" />
          {props.modal === 'notModal' ? (
            <label htmlFor={props.photo.id}>
              <img src={window.comment} className="icons" />
            </label>
          ) : ('') }
        <div className="allComments">
          <div className="container">
          {props.isModal === 'true' ? (
          <div className="photo-bar">
              <UserHeader user={props.photoUser}/>
              <hr/>
          </div>
          ) : (
            ''
          )}

          {props.photo.caption ? (

            <div className="comment">
              <span className="username">{props.photoUser.username}</span>
              <span className="content">{props.photo.caption}</span>
            </div>
          ) : (
            ''
          )}

          <CommentIndexContainer
            comments={props.comments}
            photoId={props.photo.id}
            isModal={props.isModal}
          />
        </div>
        </div>
      </div>
      </div>
    );
}

export default PhotoShow;
