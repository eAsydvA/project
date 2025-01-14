import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
import userModel from "../models/userModel.js"

//API for adding doctor

const addDoctor = async (req, res) => {

    try{

        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file
        
        //console.log({name, email, password, speciality, degree, experience, about, fee, adress}, imageFile);

        // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false, message:"Missing details"})
        }
        
        // validating email format
        if(!validator.isEmail(email)) {
            return res.json({success:false, message:"Enter a valid email"})
        }

        // validating password
        if(password.lenght < 8){
            return res.json({success:false, message:"Enter a strong password"})
        }

        // hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorDate = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorDate)
        await newDoctor.save()

        res.json({success:true, message:"Doctor added"})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


//  API for admin login
const loginAdmin = async (req, res) => {
    try{

        const {email, password} = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {



            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({success:true, token})

        } else{
            res.json({success:false, message:"Invalid credentails"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


// api to get all doctor list for admin panel
const allDoctors = async (req, res) => {
    try{

        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})

    } catch (error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// api to get all appointents list
const appointmentsAdmin = async (req, res) => {
    try {

        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//api to cancel appointment
const appointmentCancel = async(req,res) =>{

    try {

        const{appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

        //releasing docotr slot

        const {docId, slotDate, slotTime} = appointmentData
        const doctorData = await doctorModel.findById(docId)
        let slots_booked = doctorData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)
        await doctorModel.findByIdAndUpdate(docId, {slots_booked})
        res.json({success:true, message:'Запись отменена'})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api to get dashboard data for admin panel
const adminDashboard = async (req, res) =>{

    try {

        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success:true, dashData})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export {addDoctor, loginAdmin, allDoctors, appointmentsAdmin, appointmentCancel, adminDashboard}


// import validator from "validator";
// import bcrypt from "bcrypt";
// import { v2 as cloudinary } from "cloudinary";
// import doctorModel from "../models/doctorModel.js";

// const addDoctor = async (req, res) => {
//     try {
//         const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
//         const imageFile = req.file;

//         // Проверка всех обязательных данных
//         if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
//             return res.json({ success: false, message: "Missing details" });
//         }

//         // Проверка формата email
//         if (!validator.isEmail(email)) {
//             return res.json({ success: false, message: "Enter a valid email" });
//         }

//         // Проверка пароля
//         if (password.length < 8) {
//             return res.json({ success: false, message: "Enter a strong password" });
//         }

//         // Хеширование пароля
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Проверка на наличие изображения перед загрузкой на Cloudinary
//         if (!imageFile || !imageFile.path) {
//             return res.json({ success: false, message: "Image not uploaded" });
//         }

//         // Загрузка изображения на Cloudinary
//         const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
//         const imageUrl = imageUpload.secure_url;

//         // Проверка, является ли address уже объектом
//         let parsedAddress;
//         try {
//             parsedAddress = typeof address === "string" ? JSON.parse(address) : address;
//         } catch (parseError) {
//             return res.json({ success: false, message: "Invalid address format" });
//         }

//         // Создание записи для нового доктора
//         const doctorData = {
//             name,
//             email,
//             image: imageUrl,
//             password: hashedPassword,
//             speciality,
//             degree,
//             experience,
//             about,
//             fees,
//             address: parsedAddress,
//             date: Date.now()
//         };

//         const newDoctor = new doctorModel(doctorData);
//         await newDoctor.save();

//         res.json({ success: true, message: "Doctor added" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { addDoctor };
    