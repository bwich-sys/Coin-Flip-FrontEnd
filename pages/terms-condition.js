import PageBanner from '../components/Common/PageBanner';
import RegisterArea from '../components/Common/RegisterArea';

const TermsCondition = () => {
  return (
    <>
      <PageBanner
        pageTitle='Terms & Conditions'
        pageSubTitle='Novis is the easiest place to buy and sell cryptocurrency.'
      />

<div className='privacy-policy-area ptb-100'>
        <div className='container'>
          <div className='privacy-policy-content'>
            <h3>Types of data we collect and use</h3>
            <p>
              We may collect personal identification information from Users in a
              variety of ways, including, but not limited to, when Users visit
              our site, subscribe to the newsletter, fill out a form, and in
              connection with other activities, services, features or resources
              we make available on our Site. Users may be asked for, as
              appropriate, name, email address, mailing address, phone number,
              company name. We will collect personal identification information
              from Users only if they voluntarily consent such information to
              us. Users can always refuse to supply <a href='#'>personally</a>{' '}
              identification information, except that it may prevent them from
              engaging in certain Site related activities.
            </p>
            <h3>Collection of information</h3>
            <p>
              This site is provided by <strong>Novis</strong>.{' '}
              <strong>Novis</strong> collects information in several ways from
              different parts of this site.
            </p>
            <p>
              <strong>1.</strong> Complimentary ground shipping within 1 to 7
              business days
              <br />
              <strong>2.</strong> In-store collection available within 1 to 7
              business days
              <br />
              <strong>3.</strong> Next-day and Express delivery options also
              available
              <br />
              <strong>4.</strong> Purchases are delivered in an orange box tied
              with a Bolduc ribbon, with the exception of certain items
              <br />
              <strong>5.</strong> See the delivery FAQs for details on shipping
              methods, costs and delivery times
            </p>
            <h3>Payment methods</h3>
            <p>
              <strong>Novis</strong> accepts the following payment methods:
            </p>
            <ul>
              <li>
                Credit Card: <strong>Visa</strong>, <strong>MasterCard</strong>,{' '}
                <strong>Discover</strong>, <strong>American Express</strong>,{' '}
                <strong>JCB</strong>, <strong>Visa Electron</strong>. The total
                will be charged to your card when the order is shipped.
              </li>
              <li>
                <strong>Novis</strong> features a Fast Checkout option, allowing
                you to securely save your credit card details so that you don't
                have to re-enter them for future purchases.
              </li>
              <li>
                PayPal: Shop easily online without having to enter your credit
                card details on the website.Your account will be charged once
                the order is completed. To register for a PayPal account, visit
                the website{' '}
                <a href='#' target='_blank'>
                  paypal.com.
                </a>
              </li>
            </ul>
            <h3>Exchanges, returns and refunds</h3>
            <p>
              Items returned within 14 days of their original shipment date in
              same as new condition will be eligible for a full refund or store
              credit. Refunds will be charged back form of payment used for
              purchase. Customer is responsible for shipping charges when making
              returns and shipping/handling fees of original purchase is
              non-refundable.
            </p>
            <p>Last updated: January 25, 2021 at 24:00 pm</p>
            <p>
              <strong>Our Locations:</strong> <br /># 2750 Quadra <br />
              Street Victoria, Canada
            </p>
            <p>
              <strong>Enquiry</strong>:{' '}
              <a href='tel:+44587154756'>+445 871 54756</a>
            </p>
            <p>
              <i>
                <u>
                  Please read this Privacy Policy carefully before using this
                  website.
                </u>
              </i>
            </p>
          </div>
        </div>
      </div>
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default TermsCondition;
