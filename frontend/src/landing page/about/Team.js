import React from 'react'

function Team() {
  return (
    <div className='container'>
      <div className='row mt-5 text-center p-5'>
        <h1>People</h1>
      </div>
      <div className='row  p-5  fs-6 ' style={{ lineHeight: "" }}>
        <div className='col p-5 text-center' >
          <img src='Resources\images\nithinKamath.jpg' style={{ borderRadius: "100%", width:"70%" }} />
          <h4 className='mt-5'>Nithin Kamath</h4>
          <h6 style={{color:"#666666"}}>Founder, CEO</h6>
        </div>
        <div className='col p-5' style={{ lineHeight:"1.8" }}>
          <p className='fs-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            <br />
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
            Playing basketball is his zen.
            <br />
            Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> /<a href='' style={{textDecoration:"none"}}> TradingQnA </a>/<a href='' style={{textDecoration:"none"}}> Twitter</a>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Team