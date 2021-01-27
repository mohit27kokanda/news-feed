import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='cover'>
            <div className='cover-img-div'>
                <img className='cover-img' src='https://digitalpress.fra1.cdn.digitaloceanspaces.com/7x7f2ah/2020/02/chilling.png'></img>
            </div>
            <div className='profile-div'>
                <img className='profile-img' src='https://frenchtoastlessons.com/wp-content/uploads/2020/11/Blablabla.png'></img>
                <h1>Jennifer Aniston</h1>
            </div>
        </div>
    )
}

export default Home;
