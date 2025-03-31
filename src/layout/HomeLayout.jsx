import React from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import LeftNavbar from '../components/layout-component/LeftNavbar'
import RightNav from '../components/layout-component/RightNav'
import Main from '../components/layout-component/Main'

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header>

                </Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <section >

                </section>
            </header >
            <nav className='w-11/12 mx-auto'> <Navbar></Navbar></nav>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
                <aside className='left col-span-3'><LeftNavbar></LeftNavbar></aside>
                <aside className='col-span-6'>Main</aside>
                <aside className='col-span-3'>{<RightNav></RightNav>}</aside>
            </main>
        </div>
    )
}

export default HomeLayout