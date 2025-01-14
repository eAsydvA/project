import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Терапевт',
        image: General_physician
    },
    {
        speciality: 'Гинеколог',
        image: Gynecologist
    },
    {
        speciality: 'Дерматолог',
        image: Dermatologist
    },
    {
        speciality: 'Педиатр',
        image: Pediatricians
    },
    {
        speciality: 'Невролог',
        image: Neurologist
    },
    {
        speciality: 'Гастроэнтеролог',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Афанасьев Владимир Сергеевич',
        image: doc1,
        speciality: 'Терапевт',
        degree: 'Бакалавр медицины',
        experience: '4 Года',
        about: 'Владимир Сергеевич твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 50,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc2',
        name: 'Ильина Елена Сергеевна',
        image: doc2,
        speciality: 'Гинеколог',
        degree: 'Бакалавр медицины',
        experience: '3 Года',
        about: 'Елена Сергеевна твердо привержена предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 60,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc3',
        name: 'Кузнецов Иван Сергеевич',
        image: doc3,
        speciality: 'Дерматолог',
        degree: 'Бакалавр медицины',
        experience: '1 Год',
        about: 'Иван Сергеевич твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 30,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc4',
        name: 'Иванов Алексей Павлович',
        image: doc4,
        speciality: 'Педиатр',
        degree: 'Бакалавр медицины',
        experience: '2 Года',
        about: 'Алексей Павлович твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 40,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc5',
        name: 'Тихонова Мария Александровна',
        image: doc5,
        speciality: 'Невролог',
        degree: 'Бакалавр медицины',
        experience: '4 Года',
        about: 'Мария Александровна твердо привержена предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 50,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc6',
        name: 'Смирнов Дмитрий Олегович',
        image: doc6,
        speciality: 'Невролог',
        degree: 'Бакалавр медицины',
        experience: '4 Года',
        about: 'Дмитрий Олегович твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 50,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc7',
        name: 'Крылов Евгений Александрович',
        image: doc7,
        speciality: 'Терапевт',
        degree: 'Бакалавр медицины',
        experience: '4 Года',
        about: 'Евгений Александрович твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 50,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc8',
        name: 'Киселёв Владислав Петрович',
        image: doc8,
        speciality: 'Гастроэнтеролог',
        degree: 'Бакалавр медицины',
        experience: '3 Года',
        about: 'Владислав Петрович твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 60,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc9',
        name: 'Соловьёва Ольга Игоревна',
        image: doc9,
        speciality: 'Дерматолог',
        degree: 'Бакалавр медицины',
        experience: '1 Год',
        about: 'Ольга Игоревна твердо привержена предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 30,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc10',
        name: 'Яковлев Роман Владимирович',
        image: doc10,
        speciality: 'Педиатр',
        degree: 'Бакалавр медицины',
        experience: '2 Года',
        about: 'Роман Владимирович твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 40,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc11',
        name: 'Самсонова Людмила Никитична',
        image: doc11,
        speciality: 'Невролог',
        degree: 'Бакалавр медицины',
        experience: '4 Года',
        about: 'Людмила Никитична твердо привержена предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 50,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc12',
        name: 'Зайцев Константин Ильич',
        image: doc12,
        speciality: 'Невролог',
        degree: 'Бакалавр медицины',
        experience: '4 Года',
        about: 'Константин Ильич твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 50,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc13',
        name: 'Борисова София Дмитриевна',
        image: doc13,
        speciality: 'Терапевт',
        degree: 'Бакалавр медицины',
        experience: '4 Года',
        about: 'София Дмитриевна твердо привержена предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 50,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc14',
        name: 'Попов Станислав Борисович',
        image: doc14,
        speciality: 'Гинеколог',
        degree: 'Бакалавр медицины',
        experience: '3 Года',
        about: 'Станислав Борисович твердо привержен предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 60,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
    {
        _id: 'doc15',
        name: 'Пономарёва Вероника Артёмовна',
        image: doc15,
        speciality: 'Дерматолог',
        degree: 'Бакалавр медицины',
        experience: '1 Год',
        about: 'Вероника Артёмовна твердо привержена предоставлению комплексной медицинской помощи, уделяя особое внимание профилактической медицине, ранней диагностике и эффективным стратегиям лечения.',
        fees: 30,
        address: {
            line1: 'улица Пушкина, дом 1',
            line2: 'Москва'
        }
    },
]