import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const CryptocurrencyArea = () => {
  const [newData, setnewData] = useState([]);

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
      <div className='cryptocurrency-area ptb-100 bg-fffbf1'>
        <div className='container'>
          <div className='section-title'>
            <h2>Top Cryptocurrencies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className='cryptocurrency-table table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Change (24h)</th>
                  <th scope='col'>Trade</th>
                </tr>
              </thead>
              <tbody>
                {newData &&
                  newData.length > 0 &&
                  newData.slice(0, 5).map((data) => (
                    <tr key={data.id}>
                      <td>
                        <div className='d-flex align-items-center crypto-image'>
                          <img src={data.image} alt='image' />
                          <h3 className='mb-0 crypto-name'>{data.name}</h3>
                        </div>
                      </td>
                      <td>USD {data.current_price}</td>
                      <td>
                        {data.price_change_percentage_24h < 0 ? (
                          <span className='trending down'>
                            <i className='fas fa-caret-down'></i> -
                            {data.price_change_percentage_24h.toFixed(2)}%
                          </span>
                        ) : (
                          <span className='trending up'>
                            <i className='fas fa-caret-up'></i> +
                            {data.price_change_percentage_24h.toFixed(2)}%
                          </span>
                        )}
                      </td>
                      <td>
                        <Link href='https://www.coinbase.com/accounts'>
                          <a className='link-btn'>BUY</a>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className='more-cryptocurrency-box text-center'>
            <Link href='/prices'>
              <a className='default-btn'>
                <i className='bx bx-purchase-tag-alt'></i> See More Prices
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptocurrencyArea;
