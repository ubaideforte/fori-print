import Header from "../header/headerWrapper.jsx";
import Footer from "../footer/footerWrapper.jsx";
import { useRouter } from "next/router";
import ScrollToTop from "../scrollToTop/index";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
