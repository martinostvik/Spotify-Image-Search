import React from 'react';
import Home from './Home';
import Result from './Result';
import Contact from './Contact';
import Navbar from './Navbar';
import '../Styles/App.scss';
import { Element, scroller } from "react-scroll";

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { 
      name: null,
      tracks: [],
      file: null,
      isLoading: false,
      noMatch: false,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();
    this.setState({isLoading: true})
    const formData = new FormData();
    formData.append('file',this.state.file);
    const options = {
      method: 'POST',
      body: formData,
    }
    fetch('/artists', options)
      .then(res => res.json())
      .then(res => {
        res.tracks ? this.setState({...res, noMatch: false}) : this.setState({tracks: [], noMatch: true});
        console.log('This is state: ', this.state);
        scroller.scrollTo('result', {
          duration: 1500,
          delay: 100,
          smooth: true,
        });
        this.setState({isLoading: false});
      });
  }

  onChange(e) {
    console.log('Setting state');
    this.setState({file:e.target.files[0]});
  }

  render() {
    return (
      <>
        <Navbar />
        <Home onFormSubmit={this.onFormSubmit} onChange={this.onChange} isLoading={this.state.isLoading} noMatch={this.state.noMatch}/>
        <Element name="result"><Result name={this.state.name} tracks={this.state.tracks} noMatch={this.state.noMatch}/></Element>
        <Contact />
      </>
    );
}
}

export default App;
