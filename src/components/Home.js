import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="Home">
      <nav>
        <div className="nav flex justify-between py-[10px] px-[20px] bg-gray-200">
          <div className="logo">
            <h1>Jether</h1>
          </div>
          <div className="logoname text-[10px]">
            <h1>Ledgerpro business Consultants</h1>
          </div>
          <div className="navbars">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>

      <div className="one h-[300px] bg-gray-400 text-sm flex flex-col justify-center px-[20px] gap-[40px]">
        <h2 className="mb-[20px]">Ledgerpro Final stop for tax consulting</h2>
        <p>
          We dfgbdfgbgb rgb gberbertb erberb erber ber ber tb ert bretbr etb
          ertb rtbrtberb ert bert berbert berb ert bre tb er bertb rtb
        </p>
        <button className="item-start border border-red-900 bg-red-400 w-[80px]">
          {" "}
          Contact us
        </button>
      </div>

      <div className="two">
        <div className="twoone">
          <div className="twodet">
            <h3>WHO WE ARE</h3>
            <h2>providing quality tax services and consulting</h2>
            <p>
              rghnrthn erv erv ergvertger everv er tergb rterter erberertg
              ergeer reter rtbertertg rtgertt gert
            </p>
          </div>
        </div>
        <div className="twotwo">
          <div className="stat"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
