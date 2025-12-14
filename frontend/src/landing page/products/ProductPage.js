import React from 'react'
import Hero from './Hero'
import Leftimage from './Leftimage'
import Rightimage from './Rightimage'
import Universe from './Universe'

function ProductPage() {
  return (
    <div>
      <Hero />
      <Leftimage
        productName="Kite"
        productImage="Resources\images\kite.png"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link="#"
        linkText="Try demo "
      />
      <Rightimage
        productName="Console"
        productImage="Resources\images\console.png"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="#"
        linkText="Learn more"
        appStore="#"
        playStore="#" />
      <Leftimage
        productName="Coin"
        productImage="Resources\images\coin.png"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link="#"
        linkText="Coin "
        appStore="#"
        playStore="#"
      />
      <Rightimage
        productName="Kite Connect API"
        productImage="Resources\images\kiteconnect.png"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="#"
        linkText="Kite Connect "
        appStore="#"
        playStore="#" />
      <Leftimage
        productName="Varsity mobile"
        productImage="Resources\images\varsity.png"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link="#"
        linkText="Learn more"
        appStore="#"
        playStore="#"
      />
      <p className='fs-3 text-center mb-5'>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</p>

      <Universe />
    </div>
  )
}

export default ProductPage