import React from 'react';
import { FollowToggleContainer } from '../follow_toggle';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followings: [], followers: [], posts: [] };
  }

  componentDidMount() {
    const uid = this.props.user.id || this.props.match.params.userId;
    this.props.getUser(uid);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.user.id) {
      this.props.getUser(nextProps.match.params.userId);
    } else if (this.state.followers != nextProps.user.followers.length) {
      this.setState({
        followings: nextProps.user.followings,
        followers: nextProps.user.followers,
        posts: nextProps.user.photo_ids
      });
    }
  }

  render() {
    var follow_toggle;
    if (this.props.currentUser.id != this.props.user.id) {
      follow_toggle = <FollowToggleContainer user={this.props.user} />;
    }

    const photos = Object.values(this.props.photos);
    const photo_array = photos.map((photo, i) => (
      <img key={i} src={photo.image} />
    ));

    return (
      <div>
        <ul>
          <img src={this.props.user.image} />
          {this.props.user.username}
          {this.props.user.user_blurb}
          following: {this.state.followings.length}
          followers: {this.state.followers.length}
          posts: {this.state.posts.length}
            {follow_toggle}
        </ul>
        {photo_array}
      </div>
    );
  }
}

export default Profile;
