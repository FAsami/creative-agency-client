import React from 'react'
import Sidebar from '../../Shared/Sidebar/Sidebar'
import Topbar from '../../Shared/Topbar/Topbar'
import Order from '../Order/Order'
import Review from '../Review/Review'
import ServiceList from '../ServiceList/ServiceList'
import { BiCart } from 'react-icons/bi';
import { FiHardDrive } from 'react-icons/fi'
import { RiMessage2Line } from 'react-icons/ri';
import { useParams } from 'react-router-dom'



function CustomerDashBoard() {
    const sidebarData = [
        { id: 0, title: 'Order', icon: <BiCart /> },
        { id: 1, title: 'ServiceList', icon: <FiHardDrive /> },
        { id: 2, title: 'Review', icon: <RiMessage2Line /> }
    ];
    const { title } = useParams();
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-md-3">
                    <Sidebar data={sidebarData} />
                </div>
                <div className="col-md-9">
                    <Topbar title={title} />

                    {title === 'Order' && <Order />}
                    {title === 'ServiceList' && <ServiceList />}
                    {title === 'Review' && <Review />}
                </div>
            </div>
        </div>
    )
}

export default CustomerDashBoard;
