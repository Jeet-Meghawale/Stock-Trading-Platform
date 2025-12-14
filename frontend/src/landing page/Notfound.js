import React from 'react'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
     <div className='container p-5 mb-5 '>
            <div className='row text-left'>
            <h4 className='mt-5'>404 Not Found!</h4>
            <h3> couldn’t find that page<br></br>
We couldn’t find the page you were looking for. Visit <Link to="/">Zerodha’s home page</Link>
</h3>
            </div>
        </div>
  )
}

export default Notfound