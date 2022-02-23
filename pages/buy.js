import Banner from '../components/Common/Banner';
import Features from '../components/Trade/Features';
import BestSeller from '../components/Common/BestSeller';
import PaymentArea from '../components/Trade/PaymentArea';
import FeedBack from '../components/Common/FeedBack';
import RegisterArea from '../components/Common/RegisterArea';

const Buy = () => {
  return (
    <>
      <Banner />
      <Features />
      <BestSeller />
      <PaymentArea />
      <FeedBack />
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default Buy;
