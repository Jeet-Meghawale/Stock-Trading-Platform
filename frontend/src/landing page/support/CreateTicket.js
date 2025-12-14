import React from 'react'

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5 text-center p-5'>
                <h1 className='fs-2 mb-4'>To create a ticket, select a relevant topic</h1>
                <div className='col-4 row mt-5 mb-5 text-left p-5'>
                    <h4 className=' mb-4'><i class="fa-solid fa-circle-plus"></i>Account Opening</h4>
                    <a href=''>Resident individual</a>
                    <a href=''>Minor</a>
                    <a href=''>Non Resident Indian (NRI)</a>
                    <a href=''>Company, Partnership, HUF and LLP</a>
                    <a href=''>Glossary</a>
                </div>

                <div className='col-4 row mt-5 mb-5 text-left p-5'>
                    <h4 className=' mb-4'><i class="fa-solid fa-circle-user"></i>Your Zerodha Account </h4>
                    <a href=''>Your Profile</a>
                    <a href=''>Account modification</a>
                    <a href=''>Client Master Report (CMR) and Depository Participant (DP)</a>
                    <a href=''>Nomination</a>
                    <a href=''>Transfer and conversion of securities</a>
                </div>

                <div className='col-4 row mt-5 mb-5 text-left p-5'>
                    <h4 className=' mb-4'><i class="fa-solid fa-delete-left"></i>Kite</h4>
                    <a href=''>IPO</a>
                    <a href=''>Trading FAQs</a>
                    <a href=''>Margin Trading Facility (MTF) and Margins</a>
                    <a href=''>Charts and orders</a>
                    <a href=''>General</a>
                </div>

                <div className='col-4 row  mb-5 text-left p-5'>
                    <h4 className=' mb-4'><i class="fa-solid fa-indian-rupee-sign"></i>Funds</h4>
                    <a href=''>Add money</a>
                    <a href=''>Withdraw money</a>
                    <a href=''>Add bank account</a>
                    <a href=''>eMandates</a>
                </div>

                <div className='col-4 row  mb-5 text-left p-5'>
                    <h4 className=' mb-4'><i class="fa-solid fa-circle-plus"></i> Console</h4>
                    <a href=''>Portfolio</a>
                    <a href=''>Corporate actions</a>
                    <a href=''>Funds statement</a>
                    <a href=''>Reports</a>
                    <a href=''>Profile</a>
                </div>

                <div className='col-4 row  mb-5 text-left p-5'>
                    <h4 className=' mb-4'><i class="fa-solid fa-circle-plus"></i>Coin</h4>
                    <a href=''>Mutual Funds</a>
                    <a href=''>National Pension Scheme (NPS)</a>
                    <a href=''>Features on Coin</a>
                    <a href=''>Payments and Orders</a>
                    <a href=''>General</a>

                </div>


            </div>

        </div>)
}

export default CreateTicket