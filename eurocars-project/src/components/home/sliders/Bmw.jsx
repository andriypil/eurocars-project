import './Bmw.css'
import { Link, Navigate, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Play } from "lucide-react"

export const Bmw = ({ id }) => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/catalogs")
    }

    return (<>
        <main className={id === 2 ? "bmw" : "tronsparent"} >
            <div className='home-bmw'>
                <div className='auto-text'>
                    <h1 className='text'><samp>Преміальні автомобілі з Європи</samp></h1>
                </div>

                <div className='name-car'>
                    <h1 className='name'>BMW M3 E30</h1>
                    <h2 className='description'>Ексклюзивна колекція європейських автомобілів преміум-класу. Повна юридична підтримка, гарантія якості.</h2>

                    <div className='characteristics-cars'>
                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>387 к.с.</h1>
                            <h2 className='characteristics-cards-h2'>Потужність</h2>
                        </div>

                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>2.9 с</h1>
                            <h2 className='characteristics-cards-h2'>0-100 км/год</h2>
                        </div>

                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>335 км/год</h1>
                            <h2 className='characteristics-cards-h2'>Макс. швидкість</h2>
                        </div>
                    </div>

                    <div className='button' >
                        <button onClick={handleNavigate} >Переглянути каталог</button>
                        <button className='video' ><samp><Play></Play>Дивитися відео</samp> </button>
                    </div>
                </div>

                <div className='pris'>
                    <div className='pris-object'>
                        <h3>Від</h3>
                        <h1>27 000 євро</h1>
                    </div>
                </div>

            </div>


        </main>
    </>)
}