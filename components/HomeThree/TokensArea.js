import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TokensArea = () => {
  const [action, setAction] = useState({});
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const comingSoonTime = () => {
    var endTime = new Date('August 23, 2022 17:00:00 PDT');
    var endTimeParse = Date.parse(endTime) / 1000;
    var now = new Date();
    var nowParse = Date.parse(now) / 1000;
    var timeLeft = endTimeParse - nowParse;
    var countdays = Math.floor(timeLeft / 86400);
    var counthours = Math.floor((timeLeft - countdays * 86400) / 3600);
    var countminutes = Math.floor(
      (timeLeft - countdays * 86400 - counthours * 3600) / 60
    );
    var countseconds = Math.floor(
      timeLeft - countdays * 86400 - counthours * 3600 - countminutes * 60
    );
    if (counthours < 10) {
      counthours = 0 + counthours;
    }
    if (countminutes < 10) {
      countminutes = 0 + countminutes;
    }
    if (countseconds < 10) {
      countseconds = 0 + countseconds;
    }

    setDays(countdays);
    setHours(counthours);
    setMinutes(countminutes);
    setSeconds(countseconds);
  };

  useEffect(() => {
    setInterval(() => {
      comingSoonTime();
    }, 1000);

    return () => {
      setAction({});
    };
  }, []);
  return (
    <>
      <div className='tokens-area pb-100'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='tokens-image'>
                <img src='/images/tokens.jpg' alt='image' />
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='tokens-content'>
                <h2>Pre-Sale Ends In</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <div id='countdown'>
                  <ul>
                    <li>
                      <span id='days'>{days}</span>DAYS
                    </li>
                    <li>
                      <span id='hours'>{hours}</span>HOURS
                    </li>
                    <li>
                      <span id='minutes'>{minutes}</span>MIN
                    </li>
                    <li>
                      <span id='seconds'>{seconds}</span>SEC
                    </li>
                  </ul>
                </div>
                <div className='token-price'>
                  <div className='d-flex'>
                    <div className='box'>
                      <span>Token Price</span>
                      <h3>1 ICOX=$0.08</h3>
                    </div>
                    <div className='box'>
                      <span>We Accept</span>
                      <div>
                        <img src='/images/ethereum.png' alt='image' /> ETH
                      </div>
                    </div>
                  </div>
                </div>
                <div className='total-price'>
                  <span>
                    Tokens Available On Pre-Sale <span>75,000,000 ICOX</span>
                  </span>
                </div>
                <div className='btn-box'>
                  <Link href='/buy'>
                    <a className='default-btn'>
                      <i className='bx bxs-discount'></i> Buy Tokens 55% Off
                    </a>
                  </Link>
                  <a href='#' className='default-btn'>
                    <i className='bx bxs-file'></i> White Pappers
                  </a>
                </div>
                <div className='payment-methods'>
                  <img src='/images/master-card.png' alt='image' />
                  <img src='/images/paypal.png' alt='image' />
                  <img src='/images/bitcoin2.png' alt='image' />
                  <img src='/images/visa.png' alt='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokensArea;
