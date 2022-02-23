import PageBanner from '../components/Common/PageBanner';

const Contact = () => {
  return (
    <>
      <PageBanner
        pageTitle='Contact Us'
        pageSubTitle='Contact us with your details & ready to start with us.'
      />

      <div className='contact-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-12 col-md-12'>
              <div className='contact-info'>
                <h3>Contact Address:</h3>
                <p>
                  Contact us with your details & ready to start with us. Get In
                  Touch!
                </p>
                <ul className='contact-list'>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-support'></i>
                    </div>
                    <p>
                      <a href='tel:+44587154756'>+44 587 154756</a>
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-globe'></i>
                    </div>
                    <p>
                      <a href='mailto:hello@novis.com'>hello@novis.com</a>
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-map'></i>
                    </div>
                    <p>2750, Quadra Street Victoria, Canada</p>
                  </li>
                </ul>
                <ul className='social-links'>
                  <li>
                    <a href='#' target='_blank' className='facebook'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='twitter'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='linkedin'>
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='instagram'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-8 col-lg-12 col-md-12'>
              <div className='maps'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.669043361966!2d-76.17429939609431!3d43.03529129888566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b8019f2991%3A0x58d5929e21a62e5!2sDinosaur%20Bar-B-Que!5e0!3m2!1sen!2sbd!4v1593527523138!5m2!1sen!2sbd'></iframe>
              </div>
            </div>
          </div>
          <div className='contact-form'>
            <div className='section-title'>
              <h2>Get In Touch!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <form id='contactForm'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      required
                      data-error='Please enter your name'
                      placeholder='Eg: Sarah Taylor'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='email'
                      required
                      data-error='Please enter your email'
                      placeholder='hello@sarah.com'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='phone_number'
                      className='form-control'
                      id='phone_number'
                      required
                      data-error='Please enter your phone number'
                      placeholder='Enter your phone number'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='msg_subject'
                      className='form-control'
                      id='msg_subject'
                      placeholder='Enter your subject'
                      required
                      data-error='Please enter your subject'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      cols={30}
                      rows={6}
                      required
                      data-error='Please enter your message'
                      placeholder='Enter message...'
                    ></textarea>
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <button type='submit' className='default-btn'>
                    <i className='bx bx-paper-plane'></i> Send Message
                  </button>
                  <div id='msgSubmit' className='h3 text-center hidden'></div>
                  <div className='clearfix'></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
