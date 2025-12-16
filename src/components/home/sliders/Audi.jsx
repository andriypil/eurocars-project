import './Audi.css'
import { Play } from "lucide-react"


export const Audi = ({ id }) => {
    return (<>


        <main className={id === 1 ? "audi" : "tronsparent"} >
            <div className='home-audi'>
                <div className='auto-text'>
                    <h1 className='text'><samp>Преміальні автомобілі з Європи</samp></h1>
                </div>

                <div className='name-car'>
                    <h1 className='name'>Audi A7 Sportback</h1>
                    <h2 className='description'>Ексклюзивна колекція європейських автомобілів преміум-класу. Повна юридична підтримка, гарантія якості.</h2>

                    <div className='characteristics-cars'>
                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>360 к.с.</h1>
                            <h2 className='characteristics-cards-h2'>Потужність</h2>
                        </div>

                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>3.2 с</h1>
                            <h2 className='characteristics-cards-h2'>0-100 км/год</h2>
                        </div>

                        <div className='cards'>
                            <h1 className='characteristics-cards-h1'>315 км/год</h1>
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
                        <h1>25 900 євро</h1>
                    </div>
                </div>

            </div>

        </main>




    </>)
}