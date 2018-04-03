import React from 'react';
import PhotoIndexItemContainer from '../photo_index_item_container';
import UserHeader from '../user_header';

class Main extends React.Component {
  componentDidMount() {
    this.props.getAllPhotos(this.props.currentUser.followings);
  }

  render() {
    const photos = Object.values(this.props.photos);
    const photoIndexItems = photos.map(photo => {
      let commentArray = [];
      Object.values(this.props.comments).forEach(comment => {
        if (photo.comment_ids.includes(comment.id)) {
          commentArray.push(comment);
        }
      });

      let user = this.props.users[photo.user_id];

      return (
        <div key={photo.id} className="container">
          <div className="photo-container">
            <UserHeader user={user} />
            <PhotoIndexItemContainer photo={photo} comments={commentArray} />
          </div>
        </div>
      );
    });

    return (
      <div className="main">
        <div className="background">{photoIndexItems}</div>
      </div>
    );
  }
}

export default Main;
