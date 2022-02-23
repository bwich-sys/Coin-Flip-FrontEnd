import SellBanner from '../components/Common/SellBanner';
import Features from '../components/Trade/Features';
import BestSeller from '../components/Common/BestSeller';
import PaymentArea from '../components/Trade/PaymentArea';
import FeedBack from '../components/Common/FeedBack';
import RegisterArea from '../components/Common/RegisterArea';

const Sell = () => {
  return (
    <>
      <SellBanner />
      <Features />
      <BestSeller />
      <PaymentArea />
      <FeedBack />
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default Sell;
