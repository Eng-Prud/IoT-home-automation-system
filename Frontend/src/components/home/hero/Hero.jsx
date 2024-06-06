import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search for a product ' subtitle='Find new devices'/>

          <form className='flex'>
            <div className='box'>
              <span>Our Devices</span>
              <input type='text' placeholder='Enter device name' />
            </div>
            <div className='box'>
              <span>Area to use</span>
              <input type='text' placeholder='Area of usage' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
