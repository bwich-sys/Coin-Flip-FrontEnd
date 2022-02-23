import PageBanner from '../components/Common/PageBanner';
import RegisterAreaTwo from '../components/Common/RegisterAreaTwo';

const CryptocurrencyDetails = () => {
  return (
    <>
      <PageBanner
        pageTitle='Learn Everything About Bitcoin!'
        pageSubTitle='Novis is the easiest place to buy and sell cryptocurrency.'
      />

      <div className='features-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>What is Bitcoin?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-item'>
                <div className='icon'>
                  <i className='fab fa-bitcoin'></i>
                </div>
                <h3>The Price of Bitcoin</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-item'>
                <div className='icon bg-F87100'>
                  <i className='fas fa-wallet'></i>
                </div>
                <h3>Bitcoin Wallets</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-item'>
                <div className='icon bg-5466f9'>
                  <i className='fas fa-shopping-cart'></i>
                </div>
                <h3>How to Buy Bitcoin</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-item'>
                <div className='icon bg-FF9900'>
                  <i className='fas fa-object-ungroup'></i>
                </div>
                <h3>How to Sell Bitcoin</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-item'>
                <div className='icon bg-cc00ff'>
                  <i className='fas fa-cubes'></i>
                </div>
                <h3>Block Explorers</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='features-area bg-f9f9f9 pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>How Do We Select Our Cryptocurrencies?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='features-box'>
                <div className='icon'>
                  <img src='/images/icon/icon18.png' alt='image' />
                </div>
                <h3>Start Instantly</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='features-box'>
                <div className='icon bg-ffefc7'>
                  <img src='/images/icon/icon19.png' alt='image' />
                </div>
                <h3>Easy to Use</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='features-box'>
                <div className='icon bg-ffc9c2'>
                  <img src='/images/icon/icon20.png' alt='image' />
                </div>
                <h3>Secure and Regulated</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterAreaTwo title="Start Trading on Novis"/>
    </>
  );
};

export default CryptocurrencyDetails;
