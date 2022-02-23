import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Banner = () => {
  const [name, setName] = useState('Bitcoin');
  const [nameTwo, setNameTwo] = useState('USD');

  //api data
  const [newData, setnewData] = useState([]);

  //converter hook
  const [conversionValue, setConversionValue] = useState('');
  const [cryptoQuantity, setcryptoQuantity] = useState(1);
  const [coinSymbol, setcoinSymbol] = useState('BTC');

  const [image, setImage] = useState(
    '/images/cryptocurrency/cryptocurrency2.png'
  );
  const [imageTwo, setImageTwo] = useState(
    '/images/cryptocurrency/cryptocurrency1.png'
  );

  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [toggleStateTwo, setToggleStateTwo] = useState(false);

  const toggleTabOne = () => {
    setToggleState(!toggleState);
  };

  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setName(cat.name);
    setImage(cat.image);
    setcoinSymbol(cat.symbol.toUpperCase());
  };

  useEffect(() => {
    const getCoins = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setnewData(data);
    };
    getCoins();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://min-api.cryptocompare.com/data/price?fsym=${coinSymbol}&tsyms=USD`
      );

      setConversionValue(data.USD);
    };
    getData();
  }, [coinSymbol]);
  return (
    <>
      <div className='banner-area'>
        <div className='container'>
          <div className='banner-content'>
            <h1>Buy & Sell Cryptocurrency Easy, Fast and Secure!</h1>
            <div className='cryptocurrency-search-box'>
              <div className='row'>
                <div className='col-lg-5 col-md-5'>
                  <div className='currency-selection'>
                    <label>YOU PAY</label>
                    <input
                      type='text'
                      value={cryptoQuantity}
                      onChange={(e) => setcryptoQuantity(e.target.value)}
                    />
                    <div
                      className={toggleState ? 'dropdown show' : 'dropdown'}
                      onClick={() => toggleTabOne()}
                    >
                      <button
                        className='dropdown-toggle'
                        type='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <img src={image} alt='image' /> {name}
                        <span>
                          {toggleState ? (
                            <i className='bx bx-chevron-up'></i>
                          ) : (
                            <i className='bx bx-chevron-down'></i>
                          )}
                        </span>
                      </button>
                      <ul
                        className={
                          toggleState ? 'dropdown-menu show' : 'dropdown-menu'
                        }
                      >
                        {newData.length > 0 &&
                          newData.map((data, index) => (
                            <li
                              key={index}
                              onClick={(e) => toggleSelected(data, index)}
                              value='watch'
                              className={
                                clicked === index
                                  ? 'option selected focus'
                                  : 'option'
                              }
                            >
                              <div className='coin-wrapper'>
                                <img src={data.image} alt='image' />
                                {data.name}
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5 col-md-5'>
                  <div className='currency-selection'>
                    <label>YOU RECEIVE</label>
                    <input
                      type='text'
                      value={conversionValue * cryptoQuantity}
                      onChange={(e) => e}
                    />
                    <div className='dropdown'>
                      <button
                        className='dropdown-toggle'
                        type='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <img src={imageTwo} alt='image' /> {nameTwo}
                      </button>
                      {/* <ul className='dropdown-menu'>
                        <li>
                          <div className='dropdown-item'>
                            <img
                              src='/images/cryptocurrency/cryptocurrency1.png'
                              alt='image'
                            />{' '}
                            USD
                          </div>
                        </li>
                        <li>
                          <div className='dropdown-item'>
                            <img
                              src='/images/cryptocurrency/cryptocurrency3.png'
                              alt='image'
                            />{' '}
                            Litecoin
                          </div>
                        </li>
                        <li>
                          <div className='dropdown-item'>
                            <img
                              src='/images/cryptocurrency/cryptocurrency4.png'
                              alt='image'
                            />{' '}
                            XRP
                          </div>
                        </li>
                        <li>
                          <div className='dropdown-item'>
                            <img
                              src='/images/cryptocurrency/cryptocurrency5.png'
                              alt='image'
                            />{' '}
                            Stellar
                          </div>
                        </li>
                        <li>
                          <div className='dropdown-item'>
                            <img
                              src='/images/cryptocurrency/cryptocurrency6.png'
                              alt='image'
                            />{' '}
                            Cardano
                          </div>
                        </li>
                        <li>
                          <div className='dropdown-item'>
                            <img
                              src='/images/cryptocurrency/cryptocurrency7.png'
                              alt='image'
                            />{' '}
                            Groestlcoin
                          </div>
                        </li>
                        <li>
                          <div className='dropdown-item'>
                            <img
                              src='/images/cryptocurrency/cryptocurrency8.png'
                              alt='image'
                            />{' '}
                            Digibyte
                          </div>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                <div className='col-lg-2 col-md-5'>
                  <div className='buy-btn'>
                    <Link href='https://www.coinbase.com/accounts'>
                      <button type='submit'>
                        <i className='bx bxs-hand-right'></i> Buy Bitcoin
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='banner-image'>
            <img src='/images/banner/banner-img2.png' alt='image' />
          </div>
        </div>
        <div className='shape1'>
          <img src='/images/shape/shape1.png' alt='image' />
        </div>
        <div className='shape2'>
          <img src='/images/shape/shape2.png' alt='image' />
        </div>
        <div className='shape3'>
          <img src='/images/shape/shape3.png' alt='image' />
        </div>
        <div className='shape4'>
          <img src='/images/shape/shape4.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default Banner;
