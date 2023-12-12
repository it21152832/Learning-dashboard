import React from 'react'
import toggleSidebarSlice from '../reducers/toggleSidebar'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {

  //dispatch 
  const dispatch = useDispatch();

  const userData = useSelector ((state) => state.LoginReducer)

  const toggle = () => {
    dispatch(toggleSidebarSlice.actions.toggleSidebar())
  }
  return (
    <div className='flex'>
      <div className="fixed h-20 w-full bg-blue z-20">
        <div className="flex-col flex">
          <div className="">
            <div className="h-20 items-center mx-8 px-4 flex">
              <div className="md:space-x-6 items-center ml-auto flex space-x-3">
                <div className="justify-center items-center flex relative">
                  <img src="./assets/icon-profile.png"
                    className="object-cover w-[40px] h-[40px]" alt="" />
                  <p className="font-semibold text-sm text-white font-filson">{userData.username}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button onClick={toggle} className='absolute top-5 right-3 lg:hidden md:flex sm:flex min-[32px]:flex'>
            <img src="../assets/icon-menu.png" alt="" className='w-[30px] h-[30px]'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
