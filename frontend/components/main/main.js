import React from "react";
import PhotoShow from "../photo_index_item_container";

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

      // let user = this.props.users[photo.user_id];
      //   user={user}

      return (
        <div   key={photo.id}>
          {" "}
          <PhotoShow

            photo={photo}
            comments={commentArray}
          />{" "}
        </div>
      );
    });

    return (
      <div>
        <h1>i'm the main </h1>
        {photoIndexItems}
      </div>
    );
  }
}

export default Main;
