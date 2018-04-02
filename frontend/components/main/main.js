import React from 'react';

class Main extends React.Component {
  componentDidMount() {
    this.props.getAllPhotos(this.props.currentUser.followings);
  }

  render() {
    return <h1>i'm the main </h1>;
  }
}

export default Main;
