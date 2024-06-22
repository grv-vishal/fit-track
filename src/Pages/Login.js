import React from 'react'
import Template from '../components/Authentication/Template'
import loginimg from '../assets/loginimg.jpg'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
      <Template
      title="Welcome Back !"
      desc="Tough times don’t last. Tough people do."
      img={loginimg}
      formType="login"
      />
      <Footer/>
    </div>
  )
}

export default Login
