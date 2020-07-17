import React from 'react';
import '../Styles/Contact.scss'

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <article className="contact" id="home">
          <div className="contact-text">
            <div className="contact__title">This application is developed and designed by:</div>
            <div className="contact__name">Martin Østvik</div>
            <div className="contact__title">Visit my portfolio: </div>
            <a href="http://www.ostvik.space" target="#">
              <div className="contact__name">
                www.ostvik.space
              </div>  
            </a>
          </div>
          
        
        </article>
        <article className="contact-footer" id="home">
          <div className="contact-list">
            <a href="https://github.com/martinostvik" target="#"><i class="fab fa-github contact-list__item"></i></a>
            <a href="https://www.linkedin.com/in/martinøstvik" target="#"><i class="fab fa-linkedin contact-list__item"></i></a>
            <a href="mailto:martin@ostvik.space"><i class="fas fa-paper-plane contact-list__item"></i></a>
          </div>
        </article>
      </>
    )
  }
}

export default Contact;