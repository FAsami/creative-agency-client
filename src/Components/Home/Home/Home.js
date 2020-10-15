import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Header from '../Header/Header'
import Clients from '../Clients/Clients'
import Services from '../Services/Services'
import Portfolio from '../Portfolio/Portfolio'
import ClientFeedBack from '../ClientFeedback/ClientFeedBack'
import Footer from '../Footer/Footer'
function Home() {
    return (
        <>
            <div className='hero'>
                <div className="container-fluid">
                    <Navbar />
                    <Header />
                </div>
            </div>
            <div className='container-fluid'>
                <Clients />
                <Services />
                <Portfolio />
                <ClientFeedBack />
                <Footer />
            </div>
        </>
    )
}

export default Home;
