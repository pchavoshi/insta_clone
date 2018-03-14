import React from 'react';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: "",
      imageFile: "",
      caption: "",
      user_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
        this.setState({[field]: e.target.value});
      };
    }

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file)
  {fileReader.readAsDataURL(file); }
  }

  render (){
    return (
      <div>
        <h1> {this.props.formType }</h1>

        <form>

        <input type="text" value={this.state.caption} placeholder="Caption" onChange={this.update("caption")}/>
        <input type="file" onChange={this.updateFile} placeholder="File"/>
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
