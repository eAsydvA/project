import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {

const navigate = useNavigate();

const{token, setToken, userData} = useContext(AppContext)

const [showMenu, setShowMenu] = useState(false)
//const [token, setToken] = useState(true)

const logout = () => {
  setToken(false)
  localStorage.removeItem('token')
}

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>ГЛАВНАЯ</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
        </NavLink>

        <NavLink to='/doctors'>
            <li className='py-1'>ДОКТОРА</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
        </NavLink>

        <NavLink to='/about'>
            <li className='py-1'>О НАС</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
        </NavLink>

        <NavLink to='/contact'>
            <li className='py-1'>КОНТАКТЫ</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'> 
        {
            token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group releative'>
                <img className='w-8 rounded-full' src={userData.image}></img>
                <img className='w-2.5' src={assets.dropdown_icon}></img>
                <div className='absolute top-0 right-40 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>Профиль</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>Мои записи</p>
                        <p onClick={logout} className='hover:text-black cursor-pointer'>Выйти</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidde md:block'>Создать аккаунт</button>
        }
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden ' src={assets.menu_icon} alt="" />

        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0 '} md:hdden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>ГЛАВНАЯ</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ДОКТОРА</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>О НАС</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>КОНТАКТЫ</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar