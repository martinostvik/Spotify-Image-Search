import React from 'react';
import Form from './Form';
import '../Styles/Home.scss'
import { Link, animateScroll as scroll } from "react-scroll";


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let field;
    if (this.props.isLoading) {
      field = <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    } else {
      field = <Form onFormSubmit={this.props.onFormSubmit} onChange={this.props.onChange} />;
    }
    return(
      <article className="home" id="home">
        <div className="home__search">
          <div className="title">
            <h1 className="title__top">Search for artist by</h1>
            <h1 className="title__bottom">face recognition</h1>
            {field}
          </div>
        </div>
        <div className="home__footer">
          <div className="left">
            <img className ="spotify" src="images/spotify.png"></img>
            <span className="spotify-developers">for developers</span>
          </div>
          <Link
                activeClass="active"
                to="topTracks"
                spy={true}
                smooth={true}
                duration={500}
              >
                <img className ="arrow" src="images/down-arrow.svg"></img>
              </Link>
          <div className="right">
            <img className ="clarifai" src="images/clarifai.svg"></img>
          </div>
        </div>
      </article>
    )
  }
}

export default Home;