import React from 'react';
import CommentIndexContainer from './comment_index_container';
import UserHeader from './user_header';

const PhotoShow = props => {

const is_self = () => {
  return props.photoUser.id === props.currentUser.id
}


let delete_button;
if (props.isModal && is_self()) {
const openDeleteModal = e => {props.openModal({ type: 'delete_photo', id: props.photo.id })}
delete_button =  <button type="button" className="delete-button" onClick={openDeleteModal}> X </button>
}

let back_button;
let next_button;
if (props.isModal) {
const photosArray = props.photoUser.photo_ids;
const thisPhoto = photosArray.indexOf(props.photo.id);
const prevPhoto = (thisPhoto - 1);
const nextPhoto = (thisPhoto + 1);

const openNext = e => {props.openModal({ type: 'show_photo', id: photosArray[nextPhoto]}) };
if (nextPhoto < photosArray.length) {
  next_button = <button type="button" className="nav-button" onClick={openNext}> &#8883; </button>;
}

const openPrev = e => {props.openModal({ type: 'show_photo', id: photosArray[prevPhoto]}) };
if (prevPhoto >= 0) {
  back_button = <button type="button" className="nav-button" onClick={openPrev}> &#8882; </button>;
}
}

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
          {back_button}
          {next_button}
        </div>
        </div>
      </div>
      </div>
    );
}


export default PhotoShow;
