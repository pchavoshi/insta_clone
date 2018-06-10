import React from 'react';
import CommentIndexContainer from './comment_index_container';
import UserHeader from './user_header';

const PhotoShow = props => {



let delete_button
if (props.isModal && props.isSelf) {
const open_delete_modal = e => {props.openModal({ type: 'delete_photo', id: props.photo.id })}

delete_button =  <button type="button" className="delete-button" onClick={open_delete_modal}> X </button>}

    return (
      <div  className="photo-show">
        <div className="container">
          <img src={props.photo.image} className="photo" />
          {delete_button}
          {props.modal === 'notModal' ? (
            <label htmlFor={props.photo.id}>
              <img src={window.comment} className="icons" />
            </label>
          ) : ('') }
        <div className="allComments">
          <div className="container">
          {props.isModal === true ? (
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
