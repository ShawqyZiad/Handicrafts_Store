import React from 'react'
import "./home.scss"

import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'


const Home = () => {
    return (
        <div className='home'>
            <FeaturedProducts type="trending" />
            <Categories />
            <FeaturedProducts type="featured" />
        
        </div>
    )
}

export default Home