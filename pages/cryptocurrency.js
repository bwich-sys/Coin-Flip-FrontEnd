import Link from 'next/link';
import PageBanner from '../components/Common/PageBanner';
import OurFeature from '../components/Common/OurFeature';
import RegisterAreaTwo from '../components/Common/RegisterAreaTwo';

const Cryptocurrency = () => {
  return (
    <>
      <PageBanner
        pageTitle='Check Out Our Entire Coin Selection!'
        pageSubTitle='Novis is the easiest place to buy and sell cryptocurrency.'
      />

      <div className='cryptocurrency-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Cryptocurrency Selection</h2>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/bitcoin.png' alt='image' />
                  <div className='title'>
                    <h3>Bitcoin</h3>
                    <span className='sub-title'>
                      BTC - <span>€41,905</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/ethereum.png' alt='image' />
                  <div className='title'>
                    <h3>Ethereum</h3>
                    <span className='sub-title'>
                      BTC - <span>50,000</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/cardano.png' alt='image' />
                  <div className='title'>
                    <h3>Cardano</h3>
                    <span className='sub-title'>
                      BTC - <span>38,541</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/peercoin.png' alt='image' />
                  <div className='title'>
                    <h3>Peercoin</h3>
                    <span className='sub-title'>
                      BTC - <span>€12,000</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/groestlcoin.png' alt='image' />
                  <div className='title'>
                    <h3>Groestlcoin</h3>
                    <span className='sub-title'>
                      BTC - <span>14,542</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/bitconnect.png' alt='image' />
                  <div className='title'>
                    <h3>Bitconnect</h3>
                    <span className='sub-title'>
                      BTC - <span>14,514</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/digibyte.png' alt='image' />
                  <div className='title'>
                    <h3>Digibyte</h3>
                    <span className='sub-title'>
                      BTC - <span>41,514</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/ontology.png' alt='image' />
                  <div className='title'>
                    <h3>Ontology</h3>
                    <span className='sub-title'>
                      BTC - <span>14,514</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/omisego.png' alt='image' />
                  <div className='title'>
                    <h3>OmiseGO</h3>
                    <span className='sub-title'>
                      BTC - <span>41,514</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/qtum.png' alt='image' />
                  <div className='title'>
                    <h3>Qtum</h3>
                    <span className='sub-title'>
                      BTC - <span>€41,905</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/zcash.png' alt='image' />
                  <div className='title'>
                    <h3>ZCash</h3>
                    <span className='sub-title'>
                      BTC - <span>50,000</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-cryptocurrency-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/gulden.png' alt='image' />
                  <div className='title'>
                    <h3>Gulden</h3>
                    <span className='sub-title'>
                      BTC - <span>38,541</span>
                    </span>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='link-btn'>Buy</a>
                  </Link>
                  <Link href='/sell'>
                    <a className='link-btn'>Sell</a>
                  </Link>
                  <Link href='/cryptocurrency-details'>
                    <a className='link-btn'>Info</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurFeature title='How Do We Select Our Cryptocurrencies?' />
      <RegisterAreaTwo title='Start Trading on Novis' />
    </>
  );
};

export default Cryptocurrency;
