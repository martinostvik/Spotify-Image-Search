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
          <div className="contact-list">
            <i class="fab fa-github contact-list__item"></i>
            <i class="fab fa-linkedin contact-list__item"></i>
            <i class="fas fa-paper-plane contact-list__item"></i>
          </div>
          
        
        </article>
        <article className="contact-footer" id="home">
          <div className="contact-list">
            <i class="fab fa-github contact-list__item"></i>
            <i class="fab fa-linkedin contact-list__item"></i>
            <i class="fas fa-paper-plane contact-list__item"></i>
          </div>
        </article>
      </>
    )
  }
}

export default Contact;