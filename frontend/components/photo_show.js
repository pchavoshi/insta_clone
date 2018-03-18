import React from 'react';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  render() {
    return (
      <div>
        <img src={this.props.photo.image} />
      </div>
    );
  }
}

export default PhotoShow;
