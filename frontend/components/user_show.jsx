import React from 'react';
import {FollowToggleContainer} from './follow_toggle_container';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {followings: '', followers: '', posts: ''}
  }

  componentDidMount(){
    this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.user.id != nextProps.match.params.userId) {
        this.props.getUser(nextProps.match.params.userId);
    } else if (this.state.followers != nextProps.user.followers.length) {
      this.setState({followings: nextProps.user.followings.length,
        followers: nextProps.user.followers.length,
        posts: nextProps.user.photo_ids.length});
    }
  }

  render(){
    var follow_toggle;
     if (this.props.currentUser.id != this.props.user.id) {
      follow_toggle = < FollowToggleContainer user={this.props.user}/>;
      }

    const photos = Object.values(this.props.photos);
    const photo_array = photos.map(photo => photo.id);

    return (<div>
      <p>
        {this.props.user.username}
        {this.props.user.user_blurb}
        following: {this.state.followings}
        followers: {this.state.followers}
        posts: {this.state.posts}
      </p>
      {follow_toggle}
      {photo_array}
    </div>);
  }
}

export default UserShow;
