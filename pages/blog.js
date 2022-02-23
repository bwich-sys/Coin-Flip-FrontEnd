import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <PageBanner
        pageTitle='Our Latest Articles'
        pageSubTitle='Novis is the easiest place to buy and sell cryptocurrency.'
      />

      <div className='blog-area ptb-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/blog-details'>
                    <a className='d-block'>
                      <img src='/images/blog/blog1.jpg' alt='image' />
                    </a>
                  </Link>
                  <div className='tag-list'>
                    <a>Filecoin</a>
                  </div>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        How Filecoin is Up 50% in a Week & Could Take More
                        Profits
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Borem ipsum dolor sit amet, adhuc iriure dissentias est in,
                    est ne diam graece tincidunt.
                  </p>
                  <div className='author d-flex align-items-center'>
                    <img src='/images/user/user1.jpg' alt='image' />
                    <a>Steven Smith</a>
                  </div>
                  <Link href='/blog-details'>
                    <a className='link-btn'>
                      <i className='bx bx-right-arrow-alt'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/blog-details'>
                    <a className='d-block'>
                      <img src='/images/blog/blog2.jpg' alt='image' />
                    </a>
                  </Link>
                  <div className='tag-list'>
                    <a>Education</a>
                  </div>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Coinbase Releases Investor Education Resources in 2021
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Borem ipsum dolor sit amet, adhuc iriure dissentias est in,
                    est ne diam graece tincidunt.
                  </p>
                  <div className='author d-flex align-items-center'>
                    <img src='/images/user/user2.jpg' alt='image' />
                    <a>Sarah Taylor</a>
                  </div>
                  <Link href='/blog-details'>
                    <a className='link-btn'>
                      <i className='bx bx-right-arrow-alt'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/blog-details'>
                    <a className='d-block'>
                      <img src='/images/blog/blog3.jpg' alt='image' />
                    </a>
                  </Link>
                  <div className='tag-list'>
                    <a>Bitcoin</a>
                  </div>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        World’s Largest Bitcoin Conference Coming To Miami in
                        June
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Borem ipsum dolor sit amet, adhuc iriure dissentias est in,
                    est ne diam graece tincidunt.
                  </p>
                  <div className='author d-flex align-items-center'>
                    <img src='/images/user/user3.jpg' alt='image' />
                    <a>David Warner</a>
                  </div>
                  <Link href='/blog-details'>
                    <a className='link-btn'>
                      <i className='bx bx-right-arrow-alt'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/blog-details'>
                    <a className='d-block'>
                      <img src='/images/blog/blog4.jpg' alt='image' />
                    </a>
                  </Link>
                  <div className='tag-list'>
                    <a>Bitcoin</a>
                  </div>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Who Is Buying Bitcoin And Pushing Its Price Higher In
                        2021?
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Borem ipsum dolor sit amet, adhuc iriure dissentias est in,
                    est ne diam graece tincidunt.
                  </p>
                  <div className='author d-flex align-items-center'>
                    <img src='/images/user/user4.jpg' alt='image' />
                    <a>James Andy</a>
                  </div>
                  <Link href='/blog-details'>
                    <a className='link-btn'>
                      <i className='bx bx-right-arrow-alt'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/blog-details'>
                    <a className='d-block'>
                      <img src='/images/blog/blog5.jpg' alt='image' />
                    </a>
                  </Link>
                  <div className='tag-list'>
                    <a>Crypto</a>
                  </div>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>Robinhood Or Coinbase? Which is Better For Crypto?</a>
                    </Link>
                  </h3>
                  <p>
                    Borem ipsum dolor sit amet, adhuc iriure dissentias est in,
                    est ne diam graece tincidunt.
                  </p>
                  <div className='author d-flex align-items-center'>
                    <img src='/images/user/user5.jpg' alt='image' />
                    <a>David Wisey</a>
                  </div>
                  <Link href='/blog-details'>
                    <a className='link-btn'>
                      <i className='bx bx-right-arrow-alt'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                <Link href='/blog-details'>
                  <a className='d-block'>
                    <img src='/images/blog/blog6.jpg' alt='image' />
                  </a>
                  </Link>
                  <div className='tag-list'>
                    <a>Gamble</a>
                  </div>
                </div>
                <div className='post-content'>
                  <h3>
                  <Link href='/blog-details'>
                    <a>
                      Can You Use Cryptocurrency to Gamble Online in 2021?
                    </a>
                    </Link>
                  </h3>
                  <p>
                    Borem ipsum dolor sit amet, adhuc iriure dissentias est in,
                    est ne diam graece tincidunt.
                  </p>
                  <div className='author d-flex align-items-center'>
                    <img src='/images/user/user6.jpg' alt='image' />
                    <a>Lucy Donar</a>
                  </div>
                  <Link href='/blog-details'>
                  <a className='link-btn'>
                    <i className='bx bx-right-arrow-alt'></i>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-12 col-md-12'>
              <div className='pagination-area'>
                <div className='nav-links'>
                  <span className='page-numbers current'>1</span>
                  <a className='page-numbers'>2</a>
                  <a className='page-numbers'>3</a>
                  <a className='next page-numbers' title='Next Page'>
                    <i className='bx bx-chevrons-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
