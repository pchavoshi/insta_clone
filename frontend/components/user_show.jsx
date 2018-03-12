import React from 'react';
import FollowToggle from './follow_toggle';

class UserShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.user.id != nextProps.match.params.userId) {
      this.props.getUser(nextProps.match.params.userId)
    }
  }

  render(){

    const follow_toggle =
     if (this.props.currentUser.id != this.props.user.id) {
      return <FollowToggle follow={this.props.follow} unfollow={this.props.unfollow} userId={this.props.user.id}
        currentUser={this.props.currentUser}/>
      }

      const photos = Object.values(this.props.photos)

  return <div>
      <p>
        {this.props.user.username}
        {this.props.user.user_blurb}
        following: {this.props.user.followings}
        followers: {this.props.user.followers}
        posts: {this.props.user.photo_ids}
      </p>
      {follow_toggle}
      {photos}
    </div>
  }
}

export default UserShow;
