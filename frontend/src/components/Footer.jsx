import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* left*/}
        <div>
            <img className='mb-5 w-40 ' src={assets.logo}></img>
            <p className='w-full md:w-2/3 text-gary-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        
        {/* center*/}
        <div>
            <p className='text-xl font-medium mb-5'>Навигация по сайту</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Главная</li>
                <li>О нас</li>
                <li>Связаться с нами</li>
                <li>Политика конфиденциальности</li>
            </ul>
            
        </div>

        {/* right*/}
        <div>
            <p className='text-xl font-medium mb-5'>Связаться с нами</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>8(888) 888-88-88</li>
                <li>docktor@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr></hr>
        <p className='py-5 text-sm text-center'>Copyright 2024 eAsydvA - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
