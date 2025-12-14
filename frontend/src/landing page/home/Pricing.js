import React from 'react';

function Pricing() {
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <h1 className='mb-5 fs-2'>Unbeatable pricing</h1>
                        <p>we pioneered the concept of discount broking and price tranparency int India. Flat fees and ni hidden charges.</p>
                        <a href='' style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='col-2'></div>
                    <div className='col-6'>
                        <div className='row mb-5'>
                            <div className='col text-center p-2 border'>
                                <h1 className='mb-3 mt-5 '>₹0</h1>
                                <p>Free equity delivery and <br />direct mutual funds</p>
                            </div>
                            <div className='col text-center p-2 border  '>
                                <h1 className='mb-3 mt-5 '>₹20</h1>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;