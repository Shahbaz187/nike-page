import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <section className='home-section'>
        <div className="home-contant">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="home-btns">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="shopping-contant">
                <p>Also Available On</p>
                <div className="brands-icons">
                    <img src="/Img/amazon.png" alt="Error" />
                    <img src="/Img/flipkart.png" alt="Error" />
                </div>
            </div>
        </div>
      <div className="home-img">
        <img src="/Img/hero-image.png" alt="Error" />
      </div>
    </section>
  )
}
