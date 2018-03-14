import React from 'react';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: "",
      imageFile: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }


  render (){
    return (
      <div>
        <h1> {this.props.formType }</h1>

        <input type="text" value=


        <form>

        </form>
      </div>
    );
  }
}

//can the image source field be selectively disabled based on the form type?
//maybe classname={formType}, disabled if formType = editPost

export default PostForm;
