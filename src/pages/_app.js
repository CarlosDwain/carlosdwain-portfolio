//import '../styles/globals.css';
import '@/styles/globals.css'; //the '@' means root directory
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}