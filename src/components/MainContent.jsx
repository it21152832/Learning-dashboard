import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Routes, Route } from 'react-router-dom'
import Course2 from './Course2'
import Home from './Home'
import Tutors from './Tutors'
import CourseDetails from './CourseDetails'
import TutorCourses from './TutorCourses'
// import Follow from './Follow'

const MainContent = () => {
  return (
    <div className='min-h-screen relative'>

      <div>
        <Navbar/>
      </div>

      <div>
        <Sidebar/>
      </div>

      {/* <div>
        <Home/>
      </div> */}

      <div>
        <Routes>
          {/* <Route path='/course' element={<Course/>}/> */}
          <Route path='/courses/:tutorId' element={<TutorCourses/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/tutors' element={<Tutors/>}/>
          <Route path='/details' element={<CourseDetails/>}/>
          <Route path='/course' element={<Course2/>}/>
          
        </Routes>
      </div>
    </div>
  )
}

export default MainContent
