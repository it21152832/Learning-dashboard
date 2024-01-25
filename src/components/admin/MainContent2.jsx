import CreateCourse from '../CreateCourse'
import { Routes, Route } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

const MainContent2 = () => {
    return (
        <div className='min-h-screen relative'>

            {/* <div>
                <Navbar />
            </div> */}

            <div>
                <AdminSidebar />
            </div>

            {/* <div>
                <Home/>
            </div> */}

            <div>
                <Routes>
                    <Route path='/courses' element={<CreateCourse />} />

                </Routes>
            </div>
        </div>
    )
}

export default MainContent2
