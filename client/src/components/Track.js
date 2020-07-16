import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="tracks__iframe">
        <iframe src={this.props.uri} width="250" height="330" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    )
  }
}

export default Track;