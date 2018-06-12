import React from 'react';
import PhotoIndexItemContainer from '../photo_index_item_container';
import UserHeader from '../user_header';
import Waypoint from 'react-waypoint';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.getPhotos = this.getPhotos.bind(this);
    this.state = {page: 1};
    this.closeEdit = this.closeEdit.bind(this)
  }

  getPhotos() {
      this.props.getAllPhotos(this.props.currentUser.followings, this.state.page);
      this.setState((prevState, props) => ({  page: prevState.page + 1}));
  }


  componentDidMount() {
    this.props.clearAllPhotos();
    this.getPhotos()
  }

  closeEdit() {
    if (this.props.isEdit) {
      this.props.closeEdit();
    }
  }

  render() {
    let photos;
    let photoIndexItems;
    if (this.props.photos) {
      photos = Object.values(this.props.photos);
      photoIndexItems = photos.map(photo => {
        let commentArray = [];
        Object.values(this.props.comments).forEach(comment => {
          if (photo.comment_ids.includes(comment.id)) {
            commentArray.push(comment);
          }
        });

        let user = this.props.users[photo.user_id];

        return (
          <div key={photo.id} className="container">
            <div className="photo-area">
              <div className="photo-container">
                <UserHeader user={user} />
                <PhotoIndexItemContainer
                  photo={photo}
                  comments={commentArray}
                />
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="main" onClick={this.closeEdit}>
        <div className="background">
        {photoIndexItems}

          <Waypoint
         onEnter={
           this.getPhotos
         }
         />
        </div>

      </div>
    );
  }
}

export default Main;
