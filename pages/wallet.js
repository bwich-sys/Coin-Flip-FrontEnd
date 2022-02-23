import PageBanner from '../components/Common/PageBanner';
import RegisterArea from '../components/Common/RegisterArea';
import AppDownload from '../components/Common/AppDownload';
import RegisterAreaTwo from '../components/Common/RegisterAreaTwo';
import Link from 'next/link';

const Wallet = () => {
  return (
    <>
      <PageBanner
        pageTitle='Cryptocurrency Wallet'
        pageSubTitle='Novis is the easiest place to buy and sell cryptocurrency'
      />
      <div className='wallet-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='wallet-content'>
                <h2>Be Your Own Bank</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <Link href='https://www.coinbase.com/accounts'>
                  <a className='default-btn'>
                    <i className='bx bxs-user'></i> Create Your Wallet
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='wallet-image text-center'>
                <img src='/images/wallet.png' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterArea
        bgGradient='bg-gradient-image'
        blackText='black-text'
        ctaImage='/images/man-with-ipad.png'
      />

      <div className='wallet-area ptb-100'>
        <div className='container'>
          <div className='wallet-tabs'>
            <div className='row align-items-center'>
              <div className='col-lg-8 col-md-12'>
                <div className='tab-content' id='myTabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='security'
                    role='tabpanel'
                  >
                    <div className='box'>
                      <h3>Best in Class Security</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                      <ul className='features-list'>
                        <li>
                          <i className='bx bx-check'></i> You’re the custodian,
                          you have control
                        </li>
                      </ul>
                      <Link href='/about'>
                        <a className='default-btn'>
                          <i className='bx bxs-user'></i> Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='send-receive'
                    role='tabpanel'
                  >
                    <div className='box'>
                      <h3>Send & Receive Instantly</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                      <ul className='features-list'>
                        <li>
                          <i className='bx bx-check'></i> We support bitcoin
                          (BTC), ether (ETH), bitcoin cash (BCH), stellar (XLM),
                          algorand (ALGO), tether (USDT) and USD Digital (USD-D)
                        </li>
                        <li>
                          <i className='bx bx-check'></i> Lowest fees
                        </li>
                      </ul>
                      <a href='login-register.html' className='default-btn'>
                        <i className='bx bxs-user'></i> Get Started
                      </a>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='buy-sell-exchange'
                    role='tabpanel'
                  >
                    <div className='box'>
                      <h3>Exchange Crypto to Crypto</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                      <ul className='features-list'>
                        <li>
                          <i className='bx bx-check'></i> Exchange
                          crypto-to-crypto instantly
                        </li>
                        <li>
                          <i className='bx bx-check'></i> Buy and sell supported
                          in 100 countriesy
                        </li>
                      </ul>
                      <a href='login-register.html' className='default-btn'>
                        <i className='bx bxs-user'></i> Login Now
                      </a>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='access-anywhere'
                    role='tabpanel'
                  >
                    <div className='box'>
                      <h3>Access Your Wallet Anywhere</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                      <ul className='features-list'>
                        <li>
                          <i className='bx bx-check'></i> iOS, Android, Web
                        </li>
                        <li>
                          <i className='bx bx-check'></i> Available in 25
                          languages
                        </li>
                        <li>
                          <i className='bx bx-check'></i> Supports 22 currencies
                        </li>
                      </ul>
                      <a href='login-register.html' className='default-btn'>
                        <i className='bx bxs-user'></i> Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12'>
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      id='security-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#security'
                      type='button'
                      role='tab'
                      aria-controls='security'
                      aria-selected='true'
                    >
                      <i className='bx bx-shield-quarter'></i>
                      Security
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='send-receive-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#send-receive'
                      type='button'
                      role='tab'
                      aria-controls='send-receive'
                      aria-selected='false'
                    >
                      <i className='bx bx-transfer'></i>
                      Send & Receive
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='buy-sell-exchange-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#buy-sell-exchange'
                      type='button'
                      role='tab'
                      aria-controls='buy-sell-exchange'
                      aria-selected='false'
                    >
                      <i className='bx bx-dollar'></i>
                      Buy, Sell, & Exchange
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='access-anywhere-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#access-anywhere'
                      type='button'
                      role='tab'
                      aria-controls='access-anywhere'
                      aria-selected='false'
                    >
                      <i className='bx bx-globe'></i>
                      Access Anywhere
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppDownload />
      <RegisterAreaTwo title='We Fixed The Dollar' />
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default Wallet;
