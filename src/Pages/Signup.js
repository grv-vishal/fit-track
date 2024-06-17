import React from 'react';
import Template from '../components/Authentication/Template';
import loginimg from '../assets/login.jpg';

const Signup = () => {
  return (
    <div>
      <Template
      title="Join the millions learnings to exercise and track daily !"
      desc="The best project you will ever work on is you."
      img={loginimg}
      formType="signin"
      />
    </div>
  )
}

export default Signup
