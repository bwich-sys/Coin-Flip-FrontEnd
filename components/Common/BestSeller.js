import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  nav: true,
  loop: true,
  margin: 30,
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bx-left-arrow-alt'></i>",
    "<i class='bx bx-right-arrow-alt'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 3,
    },
  },
};

const BestSeller = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const [newData, setnewData] = useState([]);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  useEffect(() => {
    const getCoins = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setnewData(data);
    };
    getCoins();
  }, []);

  return (
    <>
      <div className='best-seller-area pt-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-4 col-lg-12 col-md-12'>
              <div className='best-seller-image'>
                <img src='/images/women.png' alt='image' />
              </div>
            </div>
            <div className='col-xl-8 col-lg-12 col-md-12'>
              <div className='best-seller-content'>
                <div className='section-title'>
                  <h2>Our BestSellers</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
                <div className='cryptocurrency-slides'>
                  {display ? (
                    <OwlCarousel {...options}>
                      {newData.length > 0 &&
                        newData.slice(0, 10).map((data) => (
                          <div
                            className='single-cryptocurrency-box'
                            key={data.id}
                          >
                            <div className='d-flex align-items-center'>
                              <div className='bestseller-coin-image'>
                                <img src={data.image} alt='image' />
                              </div>
                              <div className='title'>
                                <h3>{data.name}</h3>
                                <span className='sub-title'>
                                  {data.symbol.toUpperCase()} -{' '}
                                  <span>{data.current_price}</span>
                                </span>
                              </div>
                            </div>
                            <div className='btn-box'>
                              <Link href='https://www.coinbase.com/accounts'>
                                <a className='link-btn'>Buy</a>
                              </Link>
                              <Link href='https://www.coinbase.com/accounts'>
                                <a className='link-btn'>Sell</a>
                              </Link>
                            </div>
                          </div>
                        ))}
                    </OwlCarousel>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='shape14'>
          <img src='/images/shape/shape14.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default BestSeller;
