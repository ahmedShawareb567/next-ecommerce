import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({ children }: any): any => {
  return (
    <>
      <Header />
      <div className="main-app">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
