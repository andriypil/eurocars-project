import { Entry } from './entry/Entry'
import { Registration } from './register/Registration'
import './RegistrationCard.css'
import { useState } from 'react'
import { Facebook, Twitter, Instagram, Chromium } from "lucide-react";


export const RegistrationCard = () => {

    const [entry, setEntry] = useState(false);

    const handleUserState = () => { setEntry(prev => !prev) }

    return (<>
        <section className="Registration-card">

            <div className="card">
                {entry == true ? <Registration></Registration> : <Entry></Entry>}

                <button className='card-button' onClick={() => handleUserState()}>{entry == false ? "Вхід" : "Регестрація"}</button>
                <div className=''>
                    <h3 onClick={() => handleUserState()}>{entry == false ? "Зарегеструйтесь за допомогою" : "Увійдіть за допомогою"}</h3>

                    <div className='footer-socialsRegistrationCard' onClick={() => handleUserState()}>{entry == false ? <>
                        <a href="#" aria-label="Facebook"><Chromium /></a>
                        <a href="#" aria-label="Facebook"><Facebook /></a>
                    </> : <>
                        <a href="#" aria-label="Facebook"><Facebook /></a>
                        <a href="#" aria-label="Twitter"><Twitter /></a>
                        <a href="#" aria-label="Instagram"><Instagram /></a></>
                    }
                    </div>
                </div>
            </div>


            <div className='img-card' onClick={() => handleUserState()}>{entry == false ?

                <img src="../../public/mersedes.jpg" alt="" /> : <img src="../../public/porsche1.jpg" alt="" />}
            </div>




        </section>

    </>)
}