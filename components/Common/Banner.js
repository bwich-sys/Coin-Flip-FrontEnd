import { useState, useEffect } from 'react';
import Link from 'next/link';
import { loadWeb3, connectWallet, getSoldTokens, swap_USDT_wUTIL, approve_USDT, getRestTokens } from '../../core/web3';
import { NotificationManager } from 'react-notifications';

const Banner = () => {
  const [name, setName] = useState('USDT');
  const [nameTwo, setNameTwo] = useState('wUTIL');

  //converter hook
  const [conversionValue, setConversionValue] = useState(0.04);
  const [cryptoQuantity, setcryptoQuantity] = useState(500);

  const [image, setImage] = useState(
    '/images/cryptocurrency/cryptocurrency1.png'
  );
  const [imageTwo, setImageTwo] = useState(
    '/images/cryptocurrency/cryptocurrency-util.png'
  );

  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [toggleStateTwo, setToggleStateTwo] = useState(false);

  const [soldTokens, setSoldTokens] = useState(0);
  const [totalTokens, setTotalTokens] = useState(0);
  const minPurchase = 500;

  const toggleTabOne = () => {
    setToggleState(!toggleState);
  };

  const toggleTabTwo = () => {
    setToggleStateTwo(!toggleStateTwo);
  };

  useEffect(() => {
    const initWeb3 = async () => {
      await loadWeb3();
      await connectWallet();

      let tmpVal = await getSoldTokens();
      setSoldTokens(tmpVal);
      let tmpVal1 = await getRestTokens();
      let totalVal = parseFloat(tmpVal) + parseFloat(tmpVal1);
      setTotalTokens(totalVal);
    }

    initWeb3();
  }, []);

  const [isApproved, setApproved] = useState(false);
  const [txProcessing, setTxProcessing] = useState(false);
  const onApprove = async () => {
    if (cryptoQuantity < minPurchase) {
      NotificationManager.error('Minimum purchase value is $500.');
      return;
    }

    connectWallet().then((result) => {
      if (result.res && result.res === 3) { // please select polygon net
        return;
      }
      NotificationManager.info('Transaction processing... Please wait for a minutes.');
      setTxProcessing(true);
      if (result.address.length > 0) {
        approve_USDT(cryptoQuantity).then((res) => {
          if (res == 0) {
            setApproved(true);
            NotificationManager.success("It's Approved.");
          } else {
            setApproved(false);
            if (res != 3) {
              NotificationManager.error("Transaction error", "Approving failed");
            }
          }
          setTxProcessing(false);
        });
      } else {
        setApproved(false);
        NotificationManager.error("Please check your wallet connection", "Approving failed");
        setTxProcessing(false);
      }
    });
  }

  const onSwap = async () => {
    connectWallet().then((result) => {
      if (result.res && result.res === 3) { // please select polygon net
        return;
      }
      NotificationManager.info('Transaction processing... Please wait for a minutes.');
      setTxProcessing(true);
      if (result.address.length > 0) {
        try {
          swap_USDT_wUTIL(cryptoQuantity).then((res) => {
            if (res == 0) {
              NotificationManager.success("Swapping is success.");

              getSoldTokens().then((inSoldTokens) => {
                setSoldTokens(inSoldTokens);
              });
            } else {
              NotificationManager.error("Transaction error", "Swapping failed");
            }
            setApproved(false);
            setTxProcessing(false);
          });
        } catch (error) {
          NotificationManager.error("Please check your wallet connection", "Swapping failed");
          setApproved(false);
          setTxProcessing(false);
        }
      }
    });
  }

  return (
    <>
      <div className='trade-cryptocurrency-area pb-100'>
        <div className='container'>
          <div className='row align-items-center justify-content-center' style={{ paddingTop: '50px', paddingBottom: '60px' }}>
            <div className='trade-cryptocurrency-content' style={{ textAlign: 'center' }}>
              <h1>
                ICO Platform ({parseFloat(soldTokens).toLocaleString('en')}/{parseFloat(totalTokens).toLocaleString('en')})
              </h1>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='trade-cryptocurrency-content'>
                <h1>
                  <span>Token Price ($0.04)</span>
                  <span>Minimum Purchase ($500)</span>
                </h1>
                <p>
                  Welcome to ICO Platform.
                  You'll get a lot of earnings.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='trade-cryptocurrency-box'>
                <div className='currency-selection'>
                  <label>From</label>
                  <input
                    type='number'
                    value={cryptoQuantity}
                    onChange={(e) => setcryptoQuantity(e.target.value)}
                  />

                  <div
                    className={toggleStateTwo ? 'dropdown show' : 'dropdown'}
                    onClick={() => toggleTabTwo()}
                  >
                    <button
                      className='dropdown-toggle'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img src={image} alt='image' /> {name}
                    </button>

                  </div>
                </div>

                <br />
                <br />

                <div className='currency-selection'>
                  <label>To</label>
                  <input
                    type='text'
                    readOnly
                    value={cryptoQuantity / conversionValue}
                    onChange={(e) => e}
                  />

                  <div
                    className={toggleStateTwo ? 'dropdown show' : 'dropdown'}
                    onClick={() => toggleTabTwo()}
                  >
                    <button
                      className='dropdown-toggle'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img src={imageTwo} alt='image' /> {nameTwo}
                    </button>

                  </div>
                </div>
                <div className='d-flex'>
                  <Link href='#'>
                    <button type='submit' disabled={txProcessing} onClick={onApprove} style={{ marginRight: '5px' }}  >
                      <i className='bx bxs-hand-right'></i> Approve
                    </button>
                  </Link>
                  <Link href='#'>
                    <button type='submit' disabled={!isApproved || txProcessing} onClick={onSwap} style={{ marginLeft: '5px' }}>
                      <i className='bx bxs-hand-right'></i> Swap
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
