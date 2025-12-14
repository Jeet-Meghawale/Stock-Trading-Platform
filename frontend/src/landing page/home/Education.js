import React from 'react';

function Education() {
    return (
        <div className='conatiner'>
            <div className='row mt-5'>
                <div className='col-6 text-center'>
                    <img src='Resources\images\education.svg'></img>
                </div>
                <div className='col-6'>
                    <div>
                        <h1 className='fs-2'>Free and open market education</h1>
                        <p>Varsity, the largest online stock market education book in the world covering everything from basics to advanced traning.</p>
                        <a href='' style={{ textDecoration: "none" }}>Versity<i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                        <div className='mt-5'>
                        <p>TradingQ&A, the most active trading and investment community in india  for all your market related queries.</p>
                        <a href='' style={{ textDecoration: "none" }}>TradingQ&A<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>);
}

export default Education;