import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {


  const {speciality} = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()

  const{doctors} = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors, speciality])

  return (

    <div>
      <p className='text-gray-600'>Просмотрите список врачей-специалистов.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'> 
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=> setShowFilter(prev => !prev)}>Фильтры</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === 'Терапевт' ? navigate('/doctors') : navigate('/doctors/Терапевт')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Терапевт" ? "bg-indigo-100 text-black" : ""}`}>Терапевт</p>
          <p onClick={()=> speciality === 'Гинеколог' ? navigate('/doctors') : navigate('/doctors/Гинеколог')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Гинеколог" ? "bg-indigo-100 text-black" : ""}`}>Гинеколог</p>
          <p onClick={()=> speciality === 'Дерматолог' ? navigate('/doctors') : navigate('/doctors/Дерматолог')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Дерматолог" ? "bg-indigo-100 text-black" : ""}`}>Дерматолог</p>
          <p onClick={()=> speciality === 'Педиатр' ? navigate('/doctors') : navigate('/doctors/Педиатр')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Педиатр" ? "bg-indigo-100 text-black" : ""}`}>Педиатр</p>
          <p onClick={()=> speciality === 'Невролог' ? navigate('/doctors') : navigate('/doctors/Невролог')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Невролог" ? "bg-indigo-100 text-black" : ""}`}>Невролог</p>
          <p onClick={()=> speciality === 'Гастроэнтеролог' ? navigate('/doctors') : navigate('/doctors/Гастроэнтеролог')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Гастроэнтеролог" ? "bg-indigo-100 text-black" : ""}`}>Гастроэнтеролог</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image}></img>
                  <div className='p-4'>
                  <div className={`flex items-center gap-2 text-m text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                        <p className={`w-2 h-2 ${item.available ? ' bg-green-500' : ' bg-gray-500'} rounded-full`}></p><p>{item.available ? 'Доступен' : 'Не доступен'}</p>
                    </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-m'>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>

      </div>
    </div>
  )
}

export default Doctors
