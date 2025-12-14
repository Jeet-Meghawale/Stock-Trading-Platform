import React from 'react'

function Universe() {
  return (
    <div className='container'>
      <div className='row mt-5 mb-5 p-5'>
        <div className='Product-universe-head text-center '>
          <h2>The Zerodha Universe</h2>
          <p className='fs-4'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className='col-4  mt-5 p-5 text-center'>
          <img href="" src='Resources\images\zerodhaFundhouse.png' style={{ height: "55px" }} className='mb-4' /><br />
          <a className='mt-5 p-3 fs-6 muted' > Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
          </a>

        </div>
        <div className='col-4  mt-5  p-5 text-center'>
          <img href="" src='Resources\images\sensibullLogo.svg' style={{ height: "55px" }} className='mb-4' /><br />
          <a className='mt-5 p-5 fs-6 muted' >
            Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.

          </a>

        </div>
        <div className='col-4  mt-5 p-5 text-center'>
          <img href="" src='Resources\images\tijori-logo.png' style={{ height: "55px" }} className='mb-4' /> <br />
          <a className='mt-5 p-5 fs-6 muted' > Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </a>
        </div>
        <div className='col-4  mt-5 p-5 text-center'>
          <img href="" src='Resources\images\streakLogo.png' style={{ height: "55px" }} className='mb-4' /><br />
          <a className='mt-5 p-3 fs-6 muted' >Systematic trading platform
            that allows you to create and backtest
            strategies without coding.
          </a>

        </div>
        <div className='col-4  mt-5  p-5 text-center'>
          <img href="" src='Resources\images\smallcaseLogo.png' style={{ height: "55px" }} className='mb-4' /><br />
          <a className='mt-5 p-5 fs-6 muted' >Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.

          </a>

        </div>
        <div className='col-4  mt-5 p-5 text-center'>
          <img href="" src='Resources\images\dittoLogo.png' style={{ height: "55px" }} className='mb-4' /> <br />
          <a className='mt-5 p-5 fs-6 muted' >Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
            Sign up for free
          </a>
        </div>
        <button className='button p-2 fs-5' style={{ width: "40%", margin: "0 auto" }}>Sign up for free</button>

      </div>

    </div>
  )
}

export default Universe