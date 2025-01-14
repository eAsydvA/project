import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {


  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Год')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('Терапевт')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')


  const {backendUrl, aToken} = useContext(AdminContext)

  const onSubmitHandler = async () =>{
    event.preventDefault()

    try {
      if (!docImg){
        return toast.error('Изображение не выбрано')
      }

      const formData = new FormData()

      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({line1:address1, line2:address2}))

      // console lo formdata

      formData.forEach((value, key)=>{
        console.log(`${key} : ${value}`)
      })

      const{data} = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {headers:{aToken}})
      

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      
      <p className='mb-3 text-lg font-medium'>Добавить врача</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-img" hidden/>
          <p>Добавить фото</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col hfp-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Имя врача</p>
              <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Имя' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Email врача</p>
              <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Пароль врача</p>
              <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Пароль' required/>
            </div>
            
            <div className='flex-1 flex flex-col gap-1'>
              <p>Опыт работы</p>
              <select onChange={(e)=> setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' name="" id="">
                <option value="1 Год">1 Год</option>
                <option value="2 Года">2 Года</option>
                <option value="3 Года">3 Года</option>
                <option value="4 Года">4 Года</option>
                <option value="5 Лет">5 Лет</option>
                <option value="6 Лет">6 Лет</option>
                <option value="7 Лет">7 Лет</option>
                <option value="8 Лет">8 Лет</option>
                <option value="9 Лет">9 Лет</option>
                <option value="10 Лет">10 Лет</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Стоимость приема</p>
              <input onChange={(e)=> setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Стоимость приема' required/>
            </div>
          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4 '>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Специальность</p>
              <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' name="" id="">
                <option value="Терапевт">Терапевт</option>
                <option value="Гинеколог">Гинеколог</option>
                <option value="Дерматолог">Дерматолог</option>
                <option value="Педиатр">Педиатр</option>
                <option value="Невролог">Невролог</option>
                <option value="Гастроэнтеролог">Гастроэнтеролог</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Образование</p>
              <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Образование' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Адрес</p>
              <input onChange={(e)=> setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='Адрес1' required/>
              <input onChange={(e)=> setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='Адрес2' required/>
            </div>
          </div>
        </div>

        <div>
          <p className='mt-4 mb-2'>О враче</p>
          <textarea onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded ' placeholder='Напишите о враче' rows={5} required/>
        </div>
        <button type='submit' className='bg-primary text-white px-10 py-3 mt-4 rounded-full'>Добавить врача</button>

      </div>
    </form>
  )
}

export default AddDoctor
