import Provider from '../provider/Provider';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </Provider>
  );
}

export default Layout;
