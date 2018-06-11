import React from 'react';
import { connect } from 'react-redux';
import { deletePhoto } from '../actions/photo_actions';
import { closeModal } from '../actions/modal_actions'


const DeletePhoto = props => {

const dispatchDelete = e => {
  props.deletePhoto(props.photoId);
  props.closeModal()
 }

return (
  <div className="delete-photo-dialog">
    <p>Delete this photo?</p>
    <button type="button" onClick={dispatchDelete}>Delete</button>
  </div>
);
};

const mSP = (state, ownProps) => {
  return {
    photoId: ownProps.photoId
  };
};

const mDP = dispatch => {
  return {
    deletePhoto: photoId => dispatch(deletePhoto(photoId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSP, mDP)(DeletePhoto);
