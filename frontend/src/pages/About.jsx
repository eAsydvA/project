import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-700 font-medium'>
        <p>О НАС</p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 '>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Добро пожаловать в Prescripto, вашего надежного партнера в удобном и эффективном управлении вашими потребностями в здравоохранении. В Prescripto мы понимаем трудности, с которыми сталкиваются люди, когда дело доходит до планирования визитов к врачу и управления своими медицинскими записями.</p>
          <p>Prescripto стремится к совершенству в технологиях здравоохранения. Мы постоянно стремимся улучшать нашу платформу, интегрируя последние достижения для улучшения пользовательского опыта и предоставления превосходного обслуживания. Независимо от того, записываетесь ли вы на первый прием или управляете текущим лечением, Prescripto здесь, чтобы поддержать вас на каждом этапе пути.</p>
          <b className='text-gray-800'>Наше Видение</b>
          <p>Наше видение в Prescripto — создать безупречный опыт медицинского обслуживания для каждого пользователя. Мы стремимся сократить разрыв между пациентами и поставщиками медицинских услуг, упростив для вас доступ к необходимой вам помощи, когда она вам нужна.</p>
        </div>
      </div>

    <div className='text-xl my-4'>
      <p className='text-gray-700 font-medium'>ПОЧЕМУ ВЫБИРАЮТ НАС?</p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 tetx-gray-600 cursor-pointer'>
        <b>ЭФФЕКТИВНОСТЬ:</b>
        <p>Оптимизированное планирование встреч, которое впишется в ваш загруженный образ жизни.</p>
      </div>

      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 tetx-gray-600 cursor-pointer'>
      <b>УДОБСТВО:</b>
      <p>Доступ к сети проверенных специалистов здравоохранения в вашем регионе.</p>
      </div>

      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 tetx-gray-600 cursor-pointer'>
      <b>ПЕРСОНАЛИЗАЦИЯ:</b>
      <p>Индивидуальные рекомендации и напоминания, которые помогут вам оставаться в курсе своего здоровья.</p>
      </div>
    </div>

    </div>
  )
}

export default About
