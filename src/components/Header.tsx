import React, { useState } from 'react';
import LoginForm from 'components/LoginForm';


interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white lg:hidden mb-2 lg:mb-0" onClick={toggleNav}>
            {isNavOpen ? (
              <span className="block text-black font-semibold lg:hidden">X</span>
            ) : (
              <div className="flex flex-col space-y-1">
                <span className="block bg-black w-6 h-0.5"></span>
                <span className="block bg-black w-6 h-0.5"></span>
                <span className="block bg-black w-6 h-0.5"></span>
              </div>
            )}
          </button>
          <a className="flex items-center flex-shrink-0 text-white mr-6" href="/">
            <img src={'https://powerfactors.com/wp-content/uploads/2022/10/PF-logo-primary-fullcolor-trustednavy.png'} className="h-8 w-auto" alt='Ristorante Con Fusion' />
          </a>
          <div className={"lg:flex " + (isNavOpen ? "block" : "hidden")}>
            <ul className="lg:flex lg:space-x-4 space-y-2 lg:space-y-0">
              <li>
                <a className="text-black font-semibold  hover:text-gray-300" href='/home'>Home</a>
              </li>
              <li>
                <a className="text-black font-semibold  hover:text-gray-300" href='/aboutus'>About Us</a>
              </li>
              <li>
                <a className="text-black font-semibold  hover:text-gray-300" href='/menu'>Request a Demo</a>
              </li>
            </ul>
            <ul className="ml-auto space-x-4">
              <li>
                <button className="text-black font-semibold border border-black hover:bg-gray-300 hover:text-purple-700 px-3 py-2 rounded" onClick={toggleModal}>
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-gray-300 text-black font-semibold py-16 px-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <div className="text-xl leading-tight mb-4 w-full md:w-3/4">
              <h1>  Disclaimer: The logos and trademarks used in this technical assignment belong to their respective owners.</h1>
              <p>
                I do not claim ownership or any rights to these logos.
                They have been used solely for the purpose of this assignment.
              </p>
              <p> Create a React project hosted at (stackblitz / bitbucket / github) using Disney REST
                API to create a dashboard.</p>
            </div>
          </div>
        </div>
      </div>
      <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Header;