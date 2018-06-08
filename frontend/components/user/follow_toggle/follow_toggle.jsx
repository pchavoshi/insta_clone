import React from 'react';

class FollowToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {follow_state: ''};
    this.folllowState = this.followState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentWillReceiveProps(nextProps){
    if ( nextProps.user.username != "" && nextProps.user != this.props.user )
  this.setState({follow_state: this.followState(nextProps.user)});
  }

  followState (nextUser) {
    if (nextUser.followers.includes(this.props.currentUser.id) ) {
      return 'Following';
    } else {
      return 'Follow';
    }
  }

  handleClick(e) {

      if (this.state.follow_state === 'Following') {
        const unFollow = {follower_id: this.props.currentUser.id, followed_id: this.props.user.id};
        this.props.unfollow(unFollow);
        this.setState({follow_state: 'Follow'});
      } else if (this.state.follow_state === 'Follow') {
        const newFollow = {follower_id: this.props.currentUser.id, followed_id: this.props.user.id};
        this.props.follow(newFollow);
        this.setState({follow_state: 'Following'});
      }
  }

  render () {

    let follow_state = this.state.follow_state

    return <button id={(follow_state === "Follow") ? "not_followed" : "following" } onClick={this.handleClick}>
      {follow_state}
    </button>;
  }

}


export default FollowToggle;
