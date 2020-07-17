import React from 'react';
import '../Styles/Form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form onSubmit={this.props.onFormSubmit}>
        <div className="form-group file-area">
          <input type="file" name="images" id="images" required="required" onChange= {this.props.onChange}/>
          <div className="file-dummy">
            <div className="success">Great, your image is loaded. Hit search!</div>
            <div className="default">Please upload artist image</div>
          </div>
        </div>
        
        <div className="form-group">
          <button type="submit">SEARCH</button>
        </div>
        
      </form>
    )
  }
}

export default Form;
