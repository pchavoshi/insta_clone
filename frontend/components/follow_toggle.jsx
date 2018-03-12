import React from 'react';

class FollowToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {follow_state: this.followState()};
    this.folllowState = this.followState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  followState () {
    if (this.props.currentUser.followings.includes(this.props.user.id)) {
      return 'followed';
    } else {
      return 'unfollowed';
    }
  }

  handleClick(e) {

      if (this.state.follow_state === 'followed') {
        this.props.unfollow(); //!!!!!!!!!!!!!!!!!!
        this.setState({follow_state: 'unfollowed'});
      } else if (this.state.follow_state === 'unfollowed') {
        const newFollow = {follower_id: this.props.currentUser.id, followed_id: this.props.user.id};
        this.props.follow(newFollow);
        this.setState({follow_state: 'followed'});
      }
  }

  render () {
    return <button onClick={this.handleClick}>
      {this.state.follow_state}
    </button>;
  }

}


export default FollowToggle;
