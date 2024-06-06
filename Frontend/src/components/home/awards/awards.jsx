import React from "react"
import Heading from "../../common/Heading"

import "./awards.css"

const Awards = () => {

  const awards = [
    {
      icon: <i class='fa-solid fa-trophy'></i>,
      num: "32 M	",
      name: "United State Award",
    },
    {
      icon: <i class='fa-solid fa-trophy'></i>,
      num: "43 M",
      name: "kenya Award"
    },
    {
      icon: <i class='fa-solid fa-lightbulb'></i>,
      num: "51 M",
      name: "Europe Award"
    },
    {
      icon: <i class='fa-solid fa-heart'></i>,
      num: "42 M",
      name: "United Kingdom Award",
    },
  ]
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Over Millions+ Happy User Being With Us Still They Love Our Services' subtitle='Our Awards' />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards
