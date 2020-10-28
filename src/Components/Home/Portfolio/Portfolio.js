import React from 'react'
import carousel1 from '../../../image/carousel/carousel-1.png'
import carousel2 from '../../../image/carousel/carousel-2.png'
import carousel3 from '../../../image/carousel/carousel-4.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Portfolio() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1199, min: 992 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 991, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1
        }
    };


    return (<>
        <div id='portfolio' style={{ backgroundColor: "#111430", position: 'relative' }} className='mt-5 p-5'>
            <h3 className="text-white font-weight-bold text-center py-5">
                Here are some of
                <span className='text-brand-green'> our works</span>
            </h3>
            <Carousel
                responsive={responsive}
                arrows={false}
                showDots={true}
                autoPlay={true}
                keyBoardControl={true}
                infinite={true}
                renderDotsOutside={true}
                dotListClass='my-3'
            >
                <div className="col-md-4">
                    <img src={carousel1} className='image-fluid' alt="None" style={{ maxHeight: '300px', maxWidth: '300px' }} />
                </div>
                <div className="col-md-4">
                    <img src={carousel2} className='image-fluid' alt="None" style={{ maxHeight: '300px', maxWidth: '300px' }} />
                </div>
                <div className="col-md-4">
                    <img src={carousel3} className='image-fluid' alt="None" style={{ maxHeight: '300px', maxWidth: '300px' }} />
                </div>
                <div className="col-md-4">
                    <img src={carousel3} className='image-fluid' alt="None" style={{ maxHeight: '300px', maxWidth: '300px' }} />
                </div>
            </Carousel>
        </div>
    </>
    )
}

export default Portfolio;
