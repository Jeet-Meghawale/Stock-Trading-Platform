import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className='row mb-5 mt-5'>
        <div className='mt-5'>
          <h1 className='text-center'>Charges</h1>
          <h3 className='muted text-center fs-5'>List of all charges and taxes</h3>
        </div>
        <div className='col-4 '>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="Resources/images/pricing0.svg"
              style={{ width: "60%" }}
              alt=""
            />
          </div>
          <h1 className='text-center mt-4'>Free equity delivery</h1>
          <p className='muted text-center fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 '>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="Resources/images/intradayTrades.svg"
              style={{ width: "60%" }}
              alt=""
            />
          </div>
          <h1 className='text-center mt-4'>Intraday and F&O trades</h1>
          <p className='muted text-center fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 '>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="Resources/images/pricingMF.svg"
              style={{ width: "60%" }}
              alt=""
            />
          </div>
          <h1 className='text-center mt-4'>Free direct MF</h1>
          <p className='muted text-center fs-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div >
  )
}

export default Hero