import React from 'react'

function Hero() {
    return (
        <div className='container-fluid bg-light-gray p-4'>
            <div className='row  p-3 ' >
                <div className='col text-left'>
                    <h1>Support Portal</h1>
                </div>
                <div className='col text-end p-3' >
                    <button type="button" class="btn btn-primary">My tickets</button>
                </div>
                <div>
                    <nav class=" navbar-light bg-light">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Eg: How do I open my account,How ..." aria-label="Search" style={{height:"50px"}}/>
                        </form>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Hero