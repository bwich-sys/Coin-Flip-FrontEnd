import Banner from '../components/HomeTwo/Banner';
import AccountCreate from '../components/HomeTwo/AccountCreate';
import BestSeller from '../components/Common/BestSeller';
import BuySell from '../components/Common/BuySell';
import FunFact from '../components/HomeTwo/FunFact';
import FeedBack from '../components/Common/FeedBack';
import Portfolio from '../components/Common/Portfolio';
import OurFeature from '../components/Common/OurFeature';
import AppDownload from '../components/Common/AppDownload';
import AdvisorArea from '../components/Common/AdvisorArea';
import RegisterArea from '../components/Common/RegisterArea';

const Index = () => {
  return (
    <>
      <Banner />
      <AccountCreate />
      <BestSeller />
      <BuySell />
      <FunFact bgf9f9f9='bg-f9f9f9' pt100='pt-100' pb70='pb-70' />
      <FeedBack />
      <Portfolio bgColor='bg-main-color' contentColor='color-white' />
      <OurFeature />
      <AppDownload />
      <AdvisorArea />
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default Index;
