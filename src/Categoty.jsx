import React from 'react'

function Categoty() {
    return (
        <div className="category">
                        <h2>Category</h2>
                        <ul className="category-list">
                            <li className="list-items" data-aos="fade-left" data-aos-delay="100">
                                <a href="#">Software</a>
                                <span>(05)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="200">
                                <a href="#">Techonlogy</a>
                                <span>(02)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="300">
                                <a href="#">Lifestyle</a>
                                <span>(07)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                                <a href="#">Shopping</a>
                                <span>(01)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                                <a href="#">Food</a>
                                <span>(08)</span>
                            </li>
                        </ul>
                    </div>
    )
}

export default Categoty
