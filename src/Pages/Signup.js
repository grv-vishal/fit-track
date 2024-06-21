import React from 'react';
import Template from '../components/Authentication/Template';
import loginimg from '../assets/login.jpg';
import Footer from '../components/Footer';

const Signup = () => {
  return (
    <div>
      <Template
      title="Join our community to take the first step towards a healthier, stronger you !"
      desc="The best project you will ever work on is you."
      img={loginimg}
      formType="signin"
      />
      <Footer/>
    </div>
  )
}

export default Signup
