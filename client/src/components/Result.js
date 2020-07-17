import React from 'react';
import Track from './Track';
import '../Styles/Result.scss'


class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  generateIframes(){
    const parent = [];
    this.props.tracks.forEach(track => {
      parent.push(<Track uri={track} key={track}/>);
    });
    return parent;
  }

  render() {
    let field;
    console.log(this.props.noMatch)
    switch (true) {
      case (this.props.noMatch):
        field = (
          <div className="result__header">
            <h2 className="result__message">No Result</h2>
          </div>);
        break;
      case(this.props.tracks.length === 0):
        field = (
          <div className="result__header">
            <h2 className="result__message">Upload image to view traks</h2>
          </div>);
        break;
      default:
        field = (
          <div className="result__header">
            <h2 className="result__title">TOP 10 TRACKS BY:</h2>
            <h2 className="result__artist">{this.props.name}</h2>
          </div>
          );
        break;
    }
    return (
      <article className="result" id="topTracks">
        {field}
        <div className="tracks">
          {this.generateIframes()}
        </div>
      </article>
    )
  }
}

export default Result;
