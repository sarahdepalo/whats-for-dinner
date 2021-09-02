import { HashLink } from 'react-router-hash-link';
import burgerAndFries from './burgerAndFries.png';
import "./introContainer.scss";

const IntroContainer = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Never Think About Choosing Dinner Again</h1>
          <div className="paragraphBox">
          <p>
          Tired of being asked, "What's for dinner"? So are we. It's time to put an end to that question. With our dinner generator, you can easily select a meal by protein or cuisine. Don't like what we gave you? Just hit the Let's Eat button for a new option. 
          </p>
            <HashLink smooth to="/#get-dinner" className="primaryBtn">GET STARTED</HashLink>
          </div>
        </div>
        <div className="col">
            <img src={burgerAndFries} alt="burger and fries"/>
        </div>
      </div>
    </>
  );
};

export default IntroContainer;
