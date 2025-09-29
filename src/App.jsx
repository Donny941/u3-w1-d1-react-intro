import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./assets/DasWeasel.svg";
import BackgroundCircle from "./components/BackgroundCircle";
import Card from "./components/Card";
import Footer from "./components/Footer";
const ImgFirst =
  "https://plus.unsplash.com/premium_photo-1673977827860-107a79dd8e8b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const ImgSecond =
  "https://plus.unsplash.com/premium_photo-1668112877096-4ddd859c8008?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const ImgThird =
  "https://images.unsplash.com/photo-1648147502083-14459112046a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const ImgFour =
  "https://plus.unsplash.com/premium_photo-1679103326877-da8dd71f7b2f?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function App() {
  return (
    <>
      <div>
        <BackgroundCircle className="blurredCircle" />
        <Navbar Logo={logo} altImg="logo" width={100} />
        <BackgroundCircle className="blurredCircleV2" />
      </div>

      <BackgroundCircle className="blurredCircleV3" />
      <BackgroundCircle className="blurredCircleV4" />
      <div className="cardContainer">
        <Card
          className="cards glassBg"
          altImg="cardImage"
          cardImg={ImgFirst}
          cardTitle="Amazing Art"
          cardDesc="Lorem ipsum dolor sit e non me lo ricordo etc etc...."
          cardBody=" cardPadding "
          buttonClass="buttonCard"
          buttonText="Click Me!"
        />

        <Card
          className="cards glassBg"
          altImg="cardImage2"
          cardImg={ImgSecond}
          cardTitle="More Amazing Art"
          cardDesc="Lorem ipsum dolor sit e non me lo ricordo etc etc...."
          cardBody=" cardPadding "
          buttonClass="buttonCard"
          buttonText="Click Me!"
        />
        <Card
          className="cards glassBg"
          altImg="cardImage2"
          cardImg={ImgThird}
          cardTitle="More Amazing Art"
          cardDesc="Lorem ipsum dolor sit e non me lo ricordo etc etc...."
          cardBody=" cardPadding "
          buttonClass="buttonCard"
          buttonText="Click Me!"
        />
        <Card
          className="cards glassBg"
          altImg="cardImage2"
          cardImg={ImgFour}
          cardTitle="More Amazing Art"
          cardDesc="Lorem ipsum dolor sit e non me lo ricordo etc etc...."
          cardBody=" cardPadding "
          buttonClass="buttonCard"
          buttonText="Click Me!"
        />
      </div>
      <Footer classFoot="glassBg" footerText="DasWeasel Inc. All rights reserved." />
      <BackgroundCircle className="blurredCircleV5" />
      <BackgroundCircle className="blurredCircleV6" />
    </>
  );
}

export default App;
