import React from 'react';
import {Redirect} from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: "",
      imageFile: "",
      caption: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);

  }

  handleSubmit(e) {
    var formData = new FormData();
    formData.append("photo[caption]", this.state.caption);
    formData.append('photo[image]', this.state.imageFile);
    formData.append('photo[user_id]', this.props.currentUser);
    this.props.processForm(formData).then(this.props.closeModal);
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
    return (
      <div className="post-form">
        <div className="container">
        <h1> Add a Photo </h1>


        <img src={this.state.imageUrl} />
        <form className="form">


          <label htmlFor="choose-file" className="file-selection">Select an image</label>
          <input type="file" id="choose-file" onChange={this.updateFile} onClick={this.props.clearPhotoAddError}/>
        <input type="text" value={this.state.caption} placeholder="Caption" onChange={this.update("caption")}/>

        {this.state.imageFile === "" ?
         <button className="button" id="disabled"  type="button"  disabled>{this.props.formType}</button>
          :
        <button className="button" type="button" onClick={this.handleSubmit}>{this.props.formType}</button> }





        </form>


      </div>
      </div>

    );
  }
}


export default PostForm;
