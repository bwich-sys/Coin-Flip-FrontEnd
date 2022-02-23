import React, { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(import('react-apexcharts'), { ssr: false });
import PageBanner from '../components/Common/PageBanner';


const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    title: {
        text: 'Bitcoin price: $48.98'
    }
  },
  series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

const PriceDetails = () => {
  const [optionsOne, setOptionsOne] = useState(options);
  const [seriesAll, setSeriesAll] = useState(series);

  const [isMounted, setisMounted] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <PageBanner
        pageTitle='Contact Us'
        pageSubTitle='Contact us with your details & ready to start with us.'
      />

      <div className='cryptocurrency-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='cryptocurrency-details-header'>
              <div className='row'>
                <div className='col-lg-3 col-md-12'>
                  <div className='cryptocurrency-market'>
                    <div className='d-table'>
                      <div className='d-table-cell'>
                        <ul>
                          <li>
                            <span>Market Cap</span>
                            <h4>$87.5T</h4>
                          </li>
                          <li>
                            <span>Volume (24 hours)</span>
                            <h4>$4.3T</h4>
                          </li>
                          <li>
                            <span>Circulating Supply</span>
                            <h4>18.7M BTC</h4>
                          </li>
                          <li>
                            <span>Visited (24h)</span>
                            <h4>$10.04T</h4>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-9 col-md-12'>
                  <div className='charts-box'>
                    <div id='chart'>
                      {display ? (
                        <Chart
                          options={optionsOne}
                          series={seriesAll}
                          type='line'
                          width='800'
                        />
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8 col-md-12'>
              <div className='cryptocurrency-details-desc'>
                <h3>About Bitcoin</h3>
                <p>
                  The world’s first cryptocurrency, Bitcoin is stored and
                  exchanged securely on the internet through a digital ledger
                  known as a blockchain. Bitcoins are divisible into smaller
                  units known as satoshis — each satoshi is worth{' '}
                  <strong>0.00000001</strong> bitcoin.
                </p>
                <div className='resources-list'>
                  <span>RESOURCES:</span>
                  <ul>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bx-globe'></i> Official website
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bx-file'></i> Whitepaper
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>What is Bitcoin?</h3>
                <p>
                  Bitcoin is a new kind of money that can be sent from one
                  person to another without the need for a trusted third party
                  such as a bank or other financial institution; it is the first
                  global, decentralized currency.
                </p>
                <h3>What is Bitcoin, the technology?</h3>
                <p>
                  Bitcoin was originally released in 2009 by Satoshi Nakamoto as
                  a piece of software and a paper describing how it works.
                  Because Bitcoin is fundamentally software, anybody can run it
                  on their computer, and therefore participate in a global
                  economy.
                </p>
                <p>
                  One of the most important elements of Bitcoin is the
                  blockchain, which tracks who owns what, similar to how a bank
                  tracks assets. What sets the Bitcoin blockchain apart from a
                  bank's ledger is that it is distributed, meaning anyone can
                  view it. Since Bitcoin is open, no company, country, or third
                  party is in control of it, and anyone can participate.
                </p>
                <h3>What is bitcoin, the currency?</h3>
                <p>
                  One can use bitcoins to purchase goods on the internet and in
                  stores. The following are some unique properties of Bitcoin:
                </p>
                <ul>
                  <li>
                    <strong>Bitcoin is global:</strong> Bitcoins can be sent to
                    someone across the world as easily as one can pass cash
                    across the counter. Bitcoin isn't closed on weekends and
                    doesn't impose any arbitrary limits.
                  </li>
                  <li>
                    <strong>Bitcoin is irreversible:</strong> Bitcoin is like
                    cash in that transactions cannot be reversed by the sender.
                    In comparison, credit card, popular online payment systems,
                    and banking transactions can be reversed after the payment
                    has been made - sometimes months after the initial
                    transaction.
                  </li>
                  <li>
                    <strong>Bitcoin is private:</strong> When paying with
                    bitcoins, there are no bank statements, and one need not
                    provide unnecessary personal information to the merchant.
                    Bitcoin transactions do not contain any identifying
                    information other than the and amounts involved.
                  </li>
                  <li>
                    <strong>Bitcoin is secure:</strong> Due to the cryptographic
                    nature of the Bitcoin network, Bitcoin payments are
                    fundamentally more secure than standard debit/credit card
                    transactions. When making a Bitcoin payment, no sensitive
                    information is required to be sent over the internet. There
                    is very low risk of your financial information being
                    compromised, or having your identity stolen.
                  </li>
                  <li>
                    <strong>Bitcoin is open:</strong> Every transaction on the
                    Bitcoin network is published publicly, without exception.
                    This means there's no room for manipulation of transactions,
                    changing the money supply, or adjusting the rules mid-game.
                    The software that constitutes the core of Bitcoin is free
                    and open-source so anyone can review the code.
                  </li>
                </ul>
                <h3>How can I learn more about Bitcoin? </h3>
                <p>
                  Learn more about Bitcoin the technology and bitcoin the
                  currency by visiting our{' '}
                  <a href='https://bitcoin.org/'>https://bitcoin.org/</a>.
                </p>
              </div>
              <div className='cryptocurrency-top-stories'>
                <h2>Top Stories</h2>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-blog-post'>
                      <div className='post-image'>
                        <a href='blog-details.html' className='d-block'>
                          <img src='/images/blog/blog1.jpg' alt='image' />
                        </a>
                        <div className='tag-list'>
                          <a href='blog.html'>Filecoin</a>
                        </div>
                      </div>
                      <div className='post-content'>
                        <h3>
                          <a href='blog-details.html'>
                            How Filecoin is Up 50% in a Week & Could Take More
                            Profits
                          </a>
                        </h3>
                        <p>
                          Borem ipsum dolor sit amet, adhuc iriure dissentias
                          est in, est ne diam graece tincidunt.
                        </p>
                        <div className='author d-flex align-items-center'>
                          <img src='/images/user/user1.jpg' alt='image' />
                          <a href='blog.html'>Steven Smith</a>
                        </div>
                        <a href='blog-details.html' className='link-btn'>
                          <i className='bx bx-right-arrow-alt'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-blog-post'>
                      <div className='post-image'>
                        <a href='blog-details.html' className='d-block'>
                          <img src='/images/blog/blog2.jpg' alt='image' />
                        </a>
                        <div className='tag-list'>
                          <a href='blog.html'>Education</a>
                        </div>
                      </div>
                      <div className='post-content'>
                        <h3>
                          <a href='blog-details.html'>
                            Coinbase Releases Investor Education Resources in
                            2021
                          </a>
                        </h3>
                        <p>
                          Borem ipsum dolor sit amet, adhuc iriure dissentias
                          est in, est ne diam graece tincidunt.
                        </p>
                        <div className='author d-flex align-items-center'>
                          <img src='/images/user/user2.jpg' alt='image' />
                          <a href='blog.html'>Sarah Taylor</a>
                        </div>
                        <a href='blog-details.html' className='link-btn'>
                          <i className='bx bx-right-arrow-alt'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='cryptocurrency-details-sidebar'>
                <div className='buy-cryptocurrency'>
                  <div className='currency-selection'>
                    <label>BUY</label>
                    <input type='text' value='12.000' />
                    <div className='cryptocurrency'>
                      <img
                        src='/images/cryptocurrency/cryptocurrency2.png'
                        alt='image'
                      />{' '}
                      BTC
                    </div>
                  </div>
                  <button type='submit'>
                    <i className='bx bxs-hand-right'></i> Buy Bitcoin
                  </button>
                </div>
                <div className='trending-assets'>
                  <h3>Trending Cryptocurrency</h3>
                  <p>
                    Cryptocurrency with the biggest change in unique page views
                    on Novis.com over the past 24 hours
                  </p>
                  <ul>
                    <li>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='title'>
                          <img
                            src='/images/cryptocurrency/bitcoin.png'
                            alt='image'
                          />
                          <span className='name'>Bitcoin</span>
                          <span className='sub-title'>BTC</span>
                        </div>
                        <div className='price'>
                          <span>$56319.3</span>
                          <span className='status up'>+3.3%</span>
                        </div>
                      </div>
                      <a href='#' className='link-btn'></a>
                    </li>
                    <li>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='title'>
                          <img
                            src='/images/cryptocurrency/ethereum.png'
                            alt='image'
                          />
                          <span className='name'>Ethereum</span>
                          <span className='sub-title'>ETH</span>
                        </div>
                        <div className='price'>
                          <span>$1713.80</span>
                          <span className='status up'>+1.74%</span>
                        </div>
                      </div>
                      <a href='#' className='link-btn'></a>
                    </li>
                    <li>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='title'>
                          <img
                            src='/images/cryptocurrency/tether.png'
                            alt='image'
                          />
                          <span className='name'>Tether</span>
                          <span className='sub-title'>USDT</span>
                        </div>
                        <div className='price'>
                          <span>$0.9997</span>
                          <span className='status up'>+0.4%</span>
                        </div>
                      </div>
                      <a href='#' className='link-btn'></a>
                    </li>
                    <li>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='title'>
                          <img
                            src='/images/cryptocurrency/cardano.png'
                            alt='image'
                          />
                          <span className='name'>Cardano</span>
                          <span className='sub-title'>ADA</span>
                        </div>
                        <div className='price'>
                          <span>$1.155000</span>
                          <span className='status up'>+1.65%</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='title'>
                          <img
                            src='/images/cryptocurrency/polkadot.png'
                            alt='image'
                          />
                          <span className='name'>Polkadot</span>
                          <span className='sub-title'>DOT</span>
                        </div>
                        <div className='price'>
                          <span>$35.837</span>
                          <span className='status up'>+1.63%</span>
                        </div>
                      </div>
                      <a href='#' className='link-btn'></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
