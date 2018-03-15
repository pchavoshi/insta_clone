import React from 'react';
import {Redirect} from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: "",
      imageFile: "",
      caption: "",
      redirectToNewPage: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    var formData = new FormData();
    formData.append("photo[caption]", this.state.caption);
    formData.append('photo[image]', this.state.imageFile);
    formData.append('photo[user_id]', this.props.currentUser);
    this.props.processForm(formData);
    this.setState({redirectToNewPage: true});
  }

  update(field) {
    return (e) => {
        this.setState({[field]: e.target.value});
      };
    }

    updateFile (e) {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      reader.onloadend = () =>
        this.setState({ imageUrl: reader.result, imageFile: file});

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: "", imageFile: null });
      }
    }

  render (){

    if (this.state.redirectToNewPage) {
      return (
        <Redirect to={`/users/${this.props.currentUser}`} />
      );
    }

    return (
      <div>
        <h1> {this.props.formType }</h1>

        <form>

        <input type="text" value={this.state.caption} placeholder="Caption" onChange={this.update("caption")}/>
        <input type="file" onChange={this.updateFile} />
        <button onClick={this.handleSubmit}>{this.props.formType}</button>
        <img src={this.state.imageUrl} />

        </form>
      </div>
    );
  }
}

//can the image source field be selectively disabled based on the form type?
//maybe classname={formType}, disabled if formType = editPost

export default PostForm;
