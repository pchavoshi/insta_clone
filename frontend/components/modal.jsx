import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePostContainer from './create_post_form_container';
import PhotoShowContainer from './photo_show_container';
import { closeEdit} from '../actions/edit_actions';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'add_photo':
      component = <CreatePostContainer />;
      break;
    case 'show_photo':
      component = <PhotoShowContainer photoId={modal.id}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => {e.stopPropagation();  dispatch(closeEdit());}}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
