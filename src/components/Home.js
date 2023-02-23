import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home =()=>{


    return(
        <div className="Home">

        {/* the nav part  */}
  
        <nav className="">
          <div className="nav flex justify-between px-5 bg-gray-100 py-6">
            <div className="logo text-3xl font-bold">
                <h1>KING</h1>
            </div>
            <div className="menu">
              <div className="menuicon">
                  <span className="text-3xl"><FontAwesomeIcon icon={faBars}/></span>
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
  
        <div className="one px-5 bg-slate-900 h-500 h-64 flex justify-start items-center">
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
  
        <div className="fourzero h-68 bg-gray-200">
           <img src={require('../images/books-head.jpg')} alt="jether" />
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

        {/* the fifth block  */}

        <div className="five flex flex-col items-center justify-center py-12 mx-7 text-center">
            <div className="fiveone mb-4">
                <h3 className="text-3xl text-gray-600 mb-2">ENROLLMENT</h3>
                <p className="text-1xl text-gray">Steps done with heart, soul, mind and stregnth</p>
            </div>
            <div className="fivetwo flex flex-col items-center">
                <div className="fttone h-32 w-32 bg-gray-200 rounded-full mb-8">
                    {/* the number one  */}
                </div>
                <div className="ftttwo">
                    <h3 className="text-2xl text-gray-600 mb-4">Contact</h3>
                    <p className=" text-1xl mb-8 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam sequi qui autem ipsum beatae  aut. Deserunt quorepellats voluptate</p>
                </div>
                <div className="fttthree">
                    <button className="bb">PREV</button> <button className="bb">NEXT</button>
                </div>
            </div>
        </div>
        
        {/* the sixth block  */}

        <div className="flex flex-col items-center text-center six py-12 bg-stone-100 px-5">
            <div className="sixone h-32 w-32 bg-gray-200 rounded-full mb-8">

            </div>
            <div className="sixtwo">
                <h3 className="text-2xl text-gray-600 mb-4">TAKE THE FIRST STEP</h3>
                <p className="text-1xl mb-8 text-gray-800">A world of learners where children gain a passport to the world</p>
            </div>
            <div className="sixthree">
                <button className="bb">CONTACT US</button>
            </div>
        </div>

        {/* the seventh blocks OUR EVENTS */}

        <div className="seven py-12 px-5">
            <div className="sevenone text-center">
                <h3 className="text-3xl text-gray-600 mb-2">OUR EVENTS</h3>
                <p className="text-1xl mb-8 text-gray-800">We'll do all the work, you get all the credit</p>
            </div>
            <div className="seventwo mb-8">
                <div className="stone h-48 bg-gray-100 mb-4 overflow-hidden">
                <img className="overflow-hidden" src={require('../images/smiling-in-class.jpg')} alt="jether" />
                </div>
                <div className="sttwo mb-8">
                    <p className="mb-2">23/ February - 4 hours - Kahawa</p>
                    <h3 className="text-2xl text-gray-600 mb-2">GRAND OPENING OF KINGDOM PREP</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at vitae quos quibusdam repudiandae ea fugiat. Eveniet suscipit, iste aut veniam </p>
                </div>
                <div className="seventhree text-center">
                    <button className="bb">REGISTER</button>
                </div>
            </div>
            <div className="seventwo mb-8">
                <div className="stone h-48 bg-gray-100 mb-4">
                    <img src="" alt="" />
                </div>
                <div className="sttwo mb-8">
                    <p className="mb-2">23/ February - 4 hours - Kahawa</p>
                    <h3 className="text-2xl text-gray-600 mb-2">GRAND OPENING OF KINGDOM PREP</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at vitae quos quibusdam repudiandae ea fugiat. Eveniet suscipit, iste aut veniam </p>
                </div>
                <div className="seventhree text-center">
                    <button className="bb">REGISTER</button>
                </div>
            </div>
            <div className="seventwo mb-8">
                <div className="stone h-48 bg-gray-100 mb-4">
                    <img src="" alt="" />
                </div>
                <div className="sttwo mb-8">
                    <p className="mb-2">23/ February - 4 hours - Kahawa</p>
                    <h3 className="text-2xl text-gray-600 mb-2">GRAND OPENING OF KINGDOM PREP</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at vitae quos quibusdam repudiandae ea fugiat. Eveniet suscipit, iste aut veniam </p>
                </div>
                <div className="seventhree text-center">
                    <button className="bb">REGISTER</button>
                </div>
            </div>
            
        </div>

        {/* the eighth block - HEAR FROM US */}

        <div className="eight flex flex-col items-center bg-stone-100 py-12 px-7">
            <div className="eightone h-32 w-32 bg-gray-200 rounded-full mb-8">

            </div>
            <div className="eighttwo">
                <h3 className="text-3xl text-gray-800 mb-4">WANT TO HEAR FORM US</h3>
            </div>
            <div className="eightthree">
                <input className="rounded-full h-2.5 mr-5 border-4 h-" type="text" />
            </div>
        </div>

        {/* the ninth block - ABOUT US  */}

        <div className="nine py-12 px-5 bg-sky-900">
            <div className="nineone">
                <h3 className="text-2xl text-gray-400 mb-4">ABOUT US</h3>
            </div>
            <div className="ninetwo mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate rem asperiores dignissimos voluptatum incidunt, explicabo, 
                    tempore voluptate a sint officiis doloremque architecto autem tempora quis. Quasi ullam architecto rerum doloribus?
                </p>
            </div>
            <div className="ninethree">
                {/* logo  */}
            </div>
            <div className="ninefour">
                <h3 className="text-2xl text-gray-400 mb-4">OUR SERVICES</h3>
                <p>1. Lorem ipsum dolor sit amet consectetur.</p>
                <p>2. Lorem ipsum dolor sit amet consectetur.</p>
                <p>3. Lorem ipsum dolor sit amet consectetur.</p>
                <p>4. Lorem ipsum dolor sit amet consectetur.</p>
                <p>5. Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
  
      </div>
    )
}

export default Home;