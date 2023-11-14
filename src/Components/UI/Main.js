import Counter from "./Counter";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
function Main() {
  return (
    <div className="main">
      <Header />
      <Counter />
      <Aside />
      <Footer />
    </div>
  );
}

export default Main;
