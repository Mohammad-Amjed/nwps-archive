import React from 'react'
import { Link } from 'react-router-dom'


function Pagination() {
    return (
        <div className="pagination flex-row">
        <Link to="#"><i className="fas fa-chevron-left"></i></Link>
        <Link to="#" className="pages">1</Link>
        <Link to="#" className="pages">2</Link>
        <Link to="#" className="pages">3</Link>
        <Link to="#"><i className="fas fa-chevron-right"></i></Link>
    </div>
    )
}

export default Pagination
