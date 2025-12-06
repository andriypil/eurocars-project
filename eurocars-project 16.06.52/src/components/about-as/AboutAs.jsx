import "./AboutAs.css"
import { Handshake, BookMarked, Car, MapPinned } from "lucide-react"

export const AboutAs = () => {
    return (<>

        <section className='AboutAs'>
            <div id="aboutas" className='information-aboutas'>

                <div className='aboutas'>
                    <div className='About-EUROCARS'>
                        <h1>Про EUROCARS</h1>
                        <h2>Ми спеціалізуємося на імпорті преміальних європейських автомобілів в Україну. Наша команда професіоналів забезпечує повний цикл послуг від пошуку до передачі ключів.</h2>

                        <div className='aboutas-points' >
                            <div className='point'>
                                <div className='badge'>
                                    <div><div></div></div>
                                </div>

                                <div className='point-text'>
                                    <h1>
                                        Індивідуальний підхід
                                    </h1>
                                    <h2>Кожен клієнт отримує персонального менеджера та індивідуальні умови</h2>
                                </div>
                            </div>

                            <div className='point'>
                                <div className='badge'>
                                    <div><div></div></div>
                                </div>

                                <div className='point-text'>
                                    <h1>
                                        Прозорість процесу
                                    </h1>
                                    <h2>Повна звітність на кожен етап покупки та доставки</h2>
                                </div>
                            </div>
                            <div className='point'>
                                <div className='badge'>
                                    <div><div></div></div>
                                </div>

                                <div className='point-text'>
                                    <h1>
                                        Гарантія якості
                                    </h1>
                                    <h2>Усі автомобілі проходять детальну перевірку та мають документальну історію</h2>
                                </div>
                            </div>
                        </div>

                        <div className='points-button'>
                            <button>Дізнатися більше</button>
                        </div>
                    </div>

                    <div className='aboutass-img'>
                        <div className='aboutass-img-contayner'>
                            <div className='img'>

                            </div>
                        </div>

                    </div>
                </div>

                <div className='aboutass-line'>
                    <div className='lines'></div>
                </div>



                <div className=' eurocar-possibilities'>

                    <div className='eurocar-possibilities-container'>

                        <div className='eurocar-possibilities-cards'>
                            <div className='cards-background'><BookMarked size={50} color='white'></BookMarked></div>

                            <h1>  8+</h1>
                            <h2> Років досвіду</h2>
                        </div>

                        <div className='eurocar-possibilities-cards'>
                            <div className='cards-background'><Car size={50} color='white'></Car></div>

                            <h1>  8+</h1>
                            <h2> Років досвіду</h2>
                        </div>

                        <div className='eurocar-possibilities-cards'>
                            <div className='cards-background'><Handshake size={50} color='white'></Handshake></div>

                            <h1>  8+</h1>
                            <h2> Років досвіду</h2>
                        </div>

                        <div className='eurocar-possibilities-cards'>
                            <div className='cards-background'><MapPinned size={50} color='white'></MapPinned></div>

                            <h1>  8+</h1>
                            <h2> Років досвіду</h2>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    </>)
}