import React from 'react'
import airbnb from '../../../image/clientsLogo/airbnb.png';
import google from '../../../image/clientsLogo/google.png';
import netflix from '../../../image/clientsLogo/netflix.png';
import slack from '../../../image/clientsLogo/slack.png';
import uber from '../../../image/clientsLogo/uber.png';

const clientsLogoList = [
    { id: 1, img: airbnb },
    { id: 2, img: google },
    { id: 3, img: netflix },
    { id: 4, img: slack },
    { id: 5, img: uber },]

function Clients() {
    return (
        <div className='row ml-5 mb-5'>
            {clientsLogoList.map(({ id, img }) =>
                <div key={id} className="col-sm-4 col-md-3 col-lg-2 p-4">
                    <img src={img} className='image-fluid' alt="Clients" style={{ maxHeight: '36px' }} />
                </div>)}
        </div>
    )
}

export default Clients;
