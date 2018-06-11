import React from 'react';
import { FollowToggleContainer } from '../follow_toggle';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followings: [], followers: [], posts: [] };
    this.is_self = this.is_self.bind(this)
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.user.id) {
      this.props.getUser(nextProps.match.params.userId);
    } else if (
      this.state.followers.length != nextProps.user.followers.length ||
      this.state.posts.length != nextProps.user.photo_ids.length
    ) {
      this.setState({
        followings: nextProps.user.followings,
        followers: nextProps.user.followers,
        posts: nextProps.user.photo_ids
      });
    }
  }

  is_self() {
return this.props.currentUser.id == this.props.user.id
  }

  render() {
    let user_button;
    if (!(this.is_self())) {
      user_button = <FollowToggleContainer user={this.props.user} />;
    } else {
      user_button = (
        <button onClick={this.props.openModal({ type: 'add_photo' })}>
          Add Photo
        </button>
      );
    }

    const photos = this.props.photos;
    const photo_array = photos.map(photo => (
      <button
        key={photo.id}
        onClick={this.props.openModal({ type: 'show_photo', id: photo.id })}
      >
        <img src={photo.image} />{' '}
      </button>
    ));

    return (
      <div className="profile">
        <div className="container">
          <div className="profile-info">
            <img src={this.props.user.image} />
            <div className="user-info">
              <div className="top">
                <span className="username-span" id="username">
                  {this.props.user.username}
                </span>
                <span className="button-span">{user_button}</span>
              </div>
              <div className="middle">
                <span className="bold">{this.state.posts.length} </span>
                <span>posts</span>
                <span className="bold">{this.state.followers.length} </span>
                <span>followers</span>
                <span className="bold">{this.state.followings.length} </span>
                <span>following</span>
              </div>
              <div className="bottom"> {this.props.user.user_blurb} </div>
            </div>
          </div>
          <hr />
          <div className="photo-array">{photo_array}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
