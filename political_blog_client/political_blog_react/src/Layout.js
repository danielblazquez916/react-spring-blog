import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    // el fragment es solo para agrupar :P
    <>
      <Navbar/>
      <div className="pt-20">
      {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
