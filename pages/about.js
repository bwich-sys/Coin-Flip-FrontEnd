import AdvisorArea from '../components/Common/AdvisorArea';
import AccountCreate from '../components/Common/AccountCreate';
import RegisterArea from '../components/Common/RegisterArea';

const About = () => {
  return (
    <>
      <div className='about-area pb-100'>
        <div className='container'>
          <div className='about-content'>
            <div className='content'>
              <h1>Not Going Anywhere, We Are Here!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
          <div className='history-timeline timeline'>
            <div className='section-title'>
              <h2>Our History</h2>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bx-coin-stack'></i>
              </div>
              <div className='timeline-event-date bg1'>
                <span>JAN 2007</span>
              </div>
              <div className='timeline-event-content'>
                <h3>Novis is Born</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bx-sun'></i>
              </div>
              <div className='timeline-event-date bg2'>
                <span>MAY 2009</span>
              </div>
              <div className='timeline-event-content'>
                <h3>The Rise of Novis</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bxl-apple'></i>
              </div>
              <div className='timeline-event-date bg3'>
                <span>APR 2012</span>
              </div>
              <div className='timeline-event-content'>
                <h3>The Novis Mobile App</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bxl-bitcoin'></i>
              </div>
              <div className='timeline-event-date bg4'>
                <span>FEB 2017</span>
              </div>
              <div className='timeline-event-content'>
                <h3>Adding Cryptocurrencies</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bxs-pie-chart-alt'></i>
              </div>
              <div className='timeline-event-date bg5'>
                <span>MAR 2020</span>
              </div>
              <div className='timeline-event-content'>
                <h3>Trading Platform</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdvisorArea bgColor="bg-f9f9f9"/>
      <AccountCreate title='Our Values'/>
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default About;
