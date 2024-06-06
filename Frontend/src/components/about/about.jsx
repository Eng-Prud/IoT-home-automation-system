import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='Learn Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Origins' subtitle='Check out our story and what inspired us' />

            <p>People are increasingly drawn to home automation systems for the convenience and control they offer. Imagine walking into a house that automatically adjusts the temperature to your liking, or using your voice to turn on lights as you enter a room. </p>
            <p>Home automation can also provide peace of mind by letting you remotely monitor your security system or schedule lights to turn on and off when you're away, creating the illusion of a constantly occupied home. Ultimately, home automation allows you to create a more comfortable, secure, and streamlined living experience.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
