import './Mersedes.css'

import { Play } from "lucide-react"

export const Mersedes = ({ id }) => {
    return (<>

        <main className={id === 3 ? 'mersedes' : "tronsparent"} >
            <div className='home-mersedes'>
                <div className='auto-text'>
                    <h1 className='text'><samp>Преміальні автомобілі з Європи</samp></h1>
                </div>

                <div className='name-car'>
                    <h1 className='name'>Mercedes CLS-Class</h1>
                    <h2 className='description'>Ексклюзивна колекція європейських автомобілів преміум-класу. Повна юридична підтримка, гарантія якості.</h2>

                    <div className='characteristics-cars'>
                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>400 к.с.</h1>
                            <h2 className='characteristics-cards-h2'>Потужність</h2>
                        </div>

                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>2.9 с</h1>
                            <h2 className='characteristics-cards-h2'>0-100 км/год</h2>
                        </div>

                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>345 км/год</h1>
                            <h2 className='characteristics-cards-h2'>Макс. швидкість</h2>
                        </div>
                    </div>

                    <div className='button' >
                        <button className='Catalog' >Переглянути каталог </button>
                        <button className='video' ><samp><Play></Play>Дивитися відео</samp> </button>
                    </div>
                </div>

                <div className='pris'>
                    <div className='pris-object'>
                        <h3>Від</h3>
                        <h1>29 500 євро</h1>
                    </div>
                </div>

            </div>

        </main>



    </>)
}