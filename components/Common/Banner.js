import { useState, useEffect } from 'react';
import Link from 'next/link';
import { loadWeb3, connectWallet, betting, deposit, isPlayableGame } from '../../core/web3';
import { NotificationManager } from 'react-notifications';

const Banner = () => {
  const name = 'ETH';
  const image = '/images/cryptocurrency/ethereum.png';

  useEffect(() => {
    const initWeb3 = async () => {
      await loadWeb3();
      await connectWallet();
    }

    initWeb3();
  }, []);

  const [cryptoQuantity, setcryptoQuantity] = useState(0.1);
  const [txProcessing, setTxProcessing] = useState(false);
  const [isDeposited, setDeposited] = useState(false);

  const onDeposit = async () => {
    connectWallet().then(async (result) => {
      if (result.res && result.res === 3) {
        return;
      }

      if (result.address.length > 0) {
        NotificationManager.info('Transaction processing... Please wait for a minutes.');
        setTxProcessing(true);
        try {
          await deposit(cryptoQuantity);
          NotificationManager.info('Success');
          setDeposited(true);
        } catch (error) {
          NotificationManager.info('Failed');
        }
        setTxProcessing(false);
      }
    });
  }

  const onBetting = async () => {
    if (await isPlayableGame() == false) {
      NotificationManager.info('Game is not runnable. Please check your balance and deposit to escrow.');
    }

    connectWallet().then((result) => {
      if (result.res && result.res === 3) {
        return;
      }
      NotificationManager.info('Transaction processing... Please wait for a minutes.');
      setTxProcessing(true);
      if (result.address.length > 0) {
        betting(cryptoQuantity).then((res) => {
          if (res == 0) {
            NotificationManager.success("Winner");
            setDeposited(false);
          } else if (res == 1) {
            NotificationManager.success("Loser");
            setDeposited(false);
          } else {
            NotificationManager.success("Transaction Error.");
          }
          setTxProcessing(false);
        });
      } else {
        NotificationManager.error("Please check your wallet connection");
        setTxProcessing(false);
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
                Coin Flip
              </h1>
            </div>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='trade-cryptocurrency-box'>
                <div className='currency-selection'>
                  <label>Betting Amount</label>
                  <input
                    type='number'
                    value={cryptoQuantity}
                    onChange={(e) => setcryptoQuantity(e.target.value)}
                  />

                  <div
                    className={'dropdown'}
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

                <div className='d-flex'>
                  <Link href='#'>
                    <button type='submit' disabled={txProcessing} onClick={onDeposit} style={{ marginRight: '5px' }}  >
                      <i className='bx bxs-hand-right'></i> Deposit
                    </button>
                  </Link>

                  <Link href='#'>
                    <button type='submit' disabled={txProcessing || !isDeposited} onClick={onBetting} style={{ marginRight: '5px' }}  >
                      <i className='bx bxs-hand-right'></i> Betting
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
