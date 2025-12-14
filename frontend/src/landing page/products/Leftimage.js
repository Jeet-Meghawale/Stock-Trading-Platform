import React from 'react'

function Leftimage({ productName, productImage, productDescription, link, linkText, playStore, appStore }) {
    return (
        <div className='container'>
            <div className='row mb-5'>
                <div className='col  mt-5 p-5'>
                    <img src={productImage}></img>
                </div>
                <div className='col  mt-5 p-5'>
                    <h2 className='mt-5 p-3'>{productName}</h2>
                    <h3 className='mt-2 p-3'>{productDescription}</h3>
                    <a href={link} className='mt-5 p-3 fs-5 mb-5'>{linkText} <i class="fa-solid fa-arrow-right-long"></i> </a>
                    <div className='row mt-4 '>
                        <div className='col '>
                            <a href={playStore}><img src="\Resources\images\googlePlayBadge.svg" /></a>
                        </div>
                        <div className='col'>
                            <a href={appStore}><img src="\Resources\images\appstoreBadge.svg" /></a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Leftimage