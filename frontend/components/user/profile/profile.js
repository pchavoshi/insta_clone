import React from 'react';
import { FollowToggleContainer } from '../follow_toggle';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followings: [], followers: [], posts: [] };
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.user.id) {
      this.props.getUser(nextProps.match.params.userId);
    } else if (this.state.followers.length != nextProps.user.followers.length) {
      this.setState({
        followings: nextProps.user.followings,
        followers: nextProps.user.followers,
        posts: nextProps.user.photo_ids
      });
    }
  }

  render() {
    var user_button;
    if (this.props.currentUser.id != this.props.user.id) {
      user_button = <FollowToggleContainer user={this.props.user} />;
    } else {
      user_button = <Link to="/new">Add New Photo </Link>
    }

    const photos = Object.values(this.props.photos);
    const photo_array = photos.map( photo => (
      <img key={photo.id} src={photo.image} />
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
            {user_button}
        </ul>
        {photo_array}
      </div>
    );
  }
}

export default Profile;
