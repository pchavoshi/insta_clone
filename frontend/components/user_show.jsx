import React from 'react';
import {FollowToggleContainer} from './follow_toggle_container';

class UserShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.user.id != nextProps.match.params.userId) {
      this.props.getUser(nextProps.match.params.userId);
    }
  }

  render(){
    var follow_toggle;
     if (this.props.currentUser.id != this.props.user.id) {
      follow_toggle = < FollowToggleContainer user={this.props.user}/>;
      }

    const photos = Object.values(this.props.photos);
    const photo_array = photos.map(photo => photo.id)

    return (<div>
      <p>
        {this.props.user.username}
        {this.props.user.user_blurb}
        following: {this.props.user.followings}
        followers: {this.props.user.followers}
        posts: {this.props.user.photo_ids}
      </p>
      {follow_toggle}
      {photo_array}
    </div>);
  }
}

export default UserShow;
