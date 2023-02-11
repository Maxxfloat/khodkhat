import Provider from '../provider/Provider';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <header className="fixed w-full p-3">
        <Header />
      </header>
      <div className="h-16 md:h-20" />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Provider>
  );
}

export default Layout;
