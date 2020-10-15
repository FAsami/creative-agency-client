import React from 'react'
import Sidebar from '../../Shared/Sidebar/Sidebar'
import Topbar from '../../Shared/Topbar/Topbar'
import { FiHardDrive } from 'react-icons/fi';
import { GrFormAdd } from 'react-icons/gr';
import { AiOutlineUserAdd } from 'react-icons/ai';
import AddServices from '../AddServices/AddServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllServices from '../AllService/AllService';
import { useParams } from 'react-router-dom';
function AdminDashBoard() {
    const sidebarData = [
        { id: 0, title: 'ServiceList', icon: <FiHardDrive /> },
        { id: 1, title: 'Add Service', icon: <GrFormAdd /> },
        { id: 2, title: 'Make Admin', icon: <AiOutlineUserAdd /> }
    ];

    const { title } = useParams();
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-md-3">
                    <Sidebar data={sidebarData} page='admin' />
                </div>
                <div className="col-md-9">
                    <Topbar title={title} />
                    {title === 'ServiceList' && <AllServices />}
                    {title === 'Add Service' && <AddServices />}
                    {title === 'Make Admin' && <MakeAdmin />}
                </div>
            </div>
        </div>
    )
}

export default AdminDashBoard;