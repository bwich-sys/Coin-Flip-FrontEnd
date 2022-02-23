import Head from 'next/head';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Presale</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta
          name='description'
          content='Ribnic - Muli-Niche eCommerce React Template'
        />
        <meta
          name='og:title'
          property='og:title'
          content='Ribnic - Muli-Niche eCommerce React Template'
        ></meta>
        <meta
          name='twitter:card'
          content='Ribnic - Muli-Niche eCommerce React Template'
        ></meta>
        <link rel='canonical' href=''></link>
      </Head>

      {/* {pathname === '/' ? <TopHeader /> :''} */}
      {/* {pathname === '/index-2' ? <NavbarTwo /> : <Navbar />} */}

      {children}

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
