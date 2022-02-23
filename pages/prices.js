import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';

const Prices = () => {
  const [newData, setnewData] = useState([]);

  //search
  const [q, setQ] = useState('');
  //selec value
  const [value, setValue] = useState(10);

  //paginate
  const [pageNumber, setpageNumber] = useState(0);
  const coinsPerPage = 20;
  const pagesVisited = pageNumber * coinsPerPage;
  const pageCount = Math.ceil(newData.length / coinsPerPage);
  const changePage = ({ selected }) => {
    setpageNumber(selected);
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

  const search = (rows) => {
    return rows.filter((row) => row.name.toLowerCase().indexOf(q) > -1);
  };

  return (
    <>
      <div className='market-health-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>
              Market is Up <span>+5.24%</span>
            </h2>
            <p>In the past 24 hours</p>
          </div>
          <ul className='market-health-list'>
            <li>
              <h3>Top Gainer (24h)</h3>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='title'>
                  <img src='/images/cryptocurrency/bitcoin.png' alt='image' />
                  <span className='name'>Bitcoin</span>
                  <span className='status up'>+25.28%</span>
                </div>
                <div className='price'>
                  <span>$45.71</span>
                  <img src='/images/cryptocurrency/chart1.png' alt='image' />
                </div>
              </div>
            </li>
            <li>
              <h3>New Listing</h3>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='title'>
                  <img src='/images/cryptocurrency/cardano.png' alt='image' />
                  <span className='name'>Cardano</span>
                  <span className='status'>Added Mar 24</span>
                </div>
                <div className='price'>
                  <span>$40.50</span>
                  <img src='/images/cryptocurrency/chart2.png' alt='image' />
                </div>
              </div>
            </li>
            <li>
              <h3>Highest Volume (24h)</h3>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='title'>
                  <img src='/images/cryptocurrency/tether.png' alt='image' />
                  <span className='name'>Tether</span>
                  <span className='status'>$4.95T</span>
                </div>
                <div className='price'>
                  <span>$4,779,476.22</span>
                  <img src='/images/cryptocurrency/chart3.png' alt='image' />
                </div>
              </div>
            </li>
            <li>
              <h3>Most Visited (24h)</h3>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='title'>
                  <img src='/images/cryptocurrency/usd-coin.png' alt='image' />
                  <span className='name'>USD Coin</span>
                  <span className='status up'>+70.41% views</span>
                </div>
                <div className='price'>
                  <span>$7,271.29</span>
                  <img src='/images/cryptocurrency/chart4.png' alt='image' />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='container pb-70'>
        <div className='row'>
          <div className='price-filter'>
            <div
              className='col-md-2 price-select'
              onChange={(e) => setValue(e.target.value)}
            >
              <span>Show</span>
              <select className='form-select price-form-select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>{' '}
              <span>Entries</span>
            </div>

            <div className='col-md-3 crypto-price-search'>
              <span>Search:</span>{' '}
              <input
                type='text'
                className='crypto-search'
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
          </div>
          <div className='cryptocurrency-table table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Currency</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Change (24h)</th>
                  <th scope='col'>MarketCap</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* slice(0, parseInt(value)) */}
                {newData &&
                  newData.length > 0 &&
                  search(newData)
                    .slice(0 || pagesVisited, pagesVisited + coinsPerPage)
                    .map((data) => (
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
                        <td>${data.total_volume}</td>
                        <td>
                          <Link href='https://www.coinbase.com/accounts'>
                            <a className='link-btn'>Trade</a>
                          </Link>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>

            <div className='count-pagination'>
              <p className='price-count'>
                Showing 1 to 20 of {newData.length} entries
              </p>

              <div className='pagination'>
                <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  activeClassName='current'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
