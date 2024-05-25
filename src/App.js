import SignIn from "./components/SignIn";
import "./App.css";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="flex justify-center pt-12">
        <img src={logo} alt="logo" width={350} />
      </div>
      <SignIn />
      <Footer />
    </>
  );
};

export default App;
