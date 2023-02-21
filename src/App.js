

function App() {
  return (
    <div className="App">

      {/* the nav part  */}

      <nav className="">
        <div className="nav flex justify-between px-5 bg-gray-100 py-6">
          <div className="logo font-mono text-3xl font-light">
              <h1>KING</h1>
          </div>
          <div className="menu">
            <div className="menuicon">
                <p>Icon</p>
            </div>
            <div className="menulist hidden">
              <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Gallery</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>        
      </nav>

        {/* the first block  */}

      <div className="one px-5 h-500 bg-gray-300 h-64 flex justify-start items-center">
        <div className="oneone text-slate-500 text-2xl">
          <h1 className="font-light mb-7">KINGDOM PRIMARY</h1>
          <h1 className="font-semibold">WE ARE MAKING EVERY CHILDS WORLD BETTER</h1>
        </div>
      </div>

      {/* the second block  */}

      <div className="two px-5 flex flex-col justify-center items-center bg-stone-100 pb-8">
        <div className="twoone h-32 m-6 bg-gray-300 w-32 rounded-full">

        </div>
        <div className="twotwo text-center">
          <h3 className="mb-4 font-semibold text-2xl ">ENROLL A CHILD</h3>
          <h4 className="mb-4 text-1xl">We provide the perfect education for your child every day</h4>
        </div>
        <div className="twothree">
          <button className="bb">Contact Us</button>
        </div>
      </div>

      {/* the third block  */}

      <div className="three py-12 mx-7">
        <div className="threeone flex flex-col items-center mb-8">
          <h3 className="text-3xl text-gray-600">OUR SERVICES</h3>
          <p>We make your child happy day after day</p>
        </div>
        <div className="threetwo">
          {/* The underline place */}
        </div>
        <div className="threethree flex flex-col items-center mb-8">
          <h3 className="text-3xl text-gray-600">OUR DAILY CARE</h3>
          <p className="font-light text-1xl">POPULAR EDUCATION FOR YOUR CHILD</p>
        </div>
        <div className="threefour mb-8">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Illum rerum aspernatur
             alias veritatis! Tenetur id vel modi, soluta optio
              laborum, perspiciatis, neque sequi fuga explicabo 
              facilis. Facere, soluta nesciunt! Animi?
          </p>
        </div>
        <div className="threefive mb-8">
          <p>1. Lorem ipsum dolor sit amet consectetur.</p>
          <p>2. Lorem ipsum dolor sit amet consectetur.</p>
          <p>3. Lorem ipsum dolor sit amet consectetur.</p>
          <p>4. Lorem ipsum dolor sit amet consectetur.</p>
          <p>5. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="threesix flex justify-center">
          <button className="bb">MORE INFO</button>
        </div>
      </div>

      {/* the fourth block  */}

      <div className="fourzero h-72 bg-gray-200">

      </div>

      <div className="four flex flex-col items-center bg-stone-100 pb-9">
        <div className="fourone h-32 m-6 bg-gray-300 w-32 rounded-full">

        </div>
        <div className="fourtwo text-center">
          <div className="ftone text-3xl text-gray-600 mb-2">
            <h1>PLAY & LEARN</h1>
          </div>
          <div className="fttwo text-1xl text-gray-600 mb-2">
            <p>Take a look into our day to day life here at Kingdom primary</p>
          </div>  
          <div className="ftthree flex justify-center">
            <button className="bb">view gallery</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
