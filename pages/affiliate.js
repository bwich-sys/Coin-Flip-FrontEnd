import PageBanner from '../components/Common/PageBanner';
import AccountCreate from '../components/Common/AccountCreate';
import OurFeature from '../components/Common/OurFeature';
import RegisterArea from '../components/Common/RegisterArea';

const Affiliate = () => {
  return (
    <>
      <PageBanner
        pageTitle='Our Affiliate Program'
        pageSubTitle='Help us introduce the world to bitcoin, cryptocurrency, and the new financial system.'
        button={true}
      />
      <AccountCreate title='How It Works' />

      <div className='earn-money-area pt-100 pb-70 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Earn Money With Novis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='earn-money-list'>
                <h3>Campaign Tracking</h3>
                <ul>
                  <li>
                    <i className='bx bxs-pie-chart'></i> Get direct access to your
                    campaign’s performance data
                  </li>
                  <li>
                    <i className='bx bx-cog'></i> Test your campaigns with custom
                    landing page tools and deep links
                  </li>
                  <li>
                    <i className='bx bxs-badge-check'></i> Set up 5+ customizable
                    performance reports
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='earn-money-list'>
                <h3>Convenient Payments</h3>
                <ul>
                  <li>
                    <i className='bx bx-support'></i> Get compensated in your local
                    currency, no matter where you live
                  </li>
                  <li>
                    <i className='bx bxs-discount'></i> Receive 50% of your
                    referrees’ trading fees for the first 3 months
                  </li>
                  <li>
                    <i className='bx bx-credit-card-front'></i> Get paid
                    electronically via PayPal or your bank account
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurFeature title="The Most Trusted Cryptocurrency Platform"/>
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default Affiliate;
