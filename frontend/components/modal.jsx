import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import { closeEdit} from '../actions/edit_actions';
import CreatePostContainer from './create_post_form_container';
import PhotoShowContainer from './photo_show_container';
import DeletePhoto from './delete_photo';


function Modal(props) {
  if (!props.modal) {
    return null;
  }
  let component;
  switch (props.modal.type) {
    case 'add_photo':
      component = <CreatePostContainer />;
      break;
    case 'show_photo':
      component = <PhotoShowContainer photoId={props.modal.id} />;
      break;
    case 'delete_photo':
      component = <DeletePhoto photoId={props.modal.id}/>;
      break;
    default:
      return null;
  }

  const closeEdit = e => {
    e.stopPropagation();

    if (props.isEdit) {
      props.closeEdit()
    }
  };

  return (
    <div className="modal-background" onClick={props.closeModal} >
      <div className="modal-child" onClick={closeEdit}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    isEdit: state.ui.commentEdit.isEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    closeEdit: e => dispatch(closeEdit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
