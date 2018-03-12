import React from 'react';

class FollowToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.followState()
    this.folllowState = this.followState.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  followState () {
    if (this.props.currentUser.followings.includes(this.props.userId)) {
      return 'followed';
    } else {
      return 'unfollowed';
    }
  }

  handleClick(e) {
      e.preventDefault;

      if (this.state === 'followed') {
        this.setState('unfollowing');
        const follow = {follower_id: ${this.props.currentUser.id}, followed_id: ${this.props.userId}}
        this.props.follow(follow);
      } else if (this.state === 'unfollowed') {
        this.setState('following');
        this.props.unfollow(this.props.userId)
      }
  }

  render () {
    return <button onClick={this.handleClick}>
      {this.state}
    </button>
  }

}


export default FollowToggle;
