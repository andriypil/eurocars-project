import './Home.css'

import { Bmw } from './sliders/Bmw'
import { Mersedes } from './sliders/Mersedes'
import { Audi } from './sliders/Audi'
import { useEffect, useState } from 'react'
import { Sidebar, ChevronLeft, ChevronRight } from 'lucide-react'


export const Home = () => {

    const [sliderId, setSliderId] = useState(1)

    const handleChangeSliderIdTop = () => {
        setSliderId((sliderId) => ++sliderId);
        if (sliderId === 3) {
            setSliderId((sliderId) => sliderId = 1)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            handleChangeSliderIdTop()
        }, 5000);
        return () => clearInterval(timer)
        console.log(sliderId)
    },
        [sliderId])

    const handleChangeSliderIdBottom = () => {
        setSliderId((sliderId) => --sliderId);
        if (sliderId === 1) {
            setSliderId((sliderId) => sliderId = 3)
        }
    }





    return (<>
        <section className="Home">
            <Mersedes id={sliderId}></Mersedes>
            <Bmw id={sliderId}></Bmw>
            <Audi id={sliderId}></Audi>


            <div className='slider'>
                <button className='' onClick={() => handleChangeSliderIdBottom()}><ChevronLeft size={40}></ChevronLeft></button>
                <section className='pimpochcha'>

                    <div className={sliderId === 1 ? "pimp" : "no-pimp"}></div>
                    <div className={sliderId === 2 ? "pimp" : "no-pimp"}></div>
                    <div className={sliderId === 3 ? "pimp" : "no-pimp"}></div>

                </section>
                <button className='' onClick={() => handleChangeSliderIdTop()}><ChevronRight size={40}></ChevronRight></button>
            </div>
        </section>

    </>)
}