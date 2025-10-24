import './Catalog.css'
import { Heart, Eye, Car, Fuel, CalendarFold } from "lucide-react"

export const Catalogs = () => {
    return (<>
        <section id='catalog' className='Catalogs-color'>
            <div className='Catalogs'>
                <div className='Catalogs-name'>
                    <h1>Рекомендовані автомобілі</h1>
                    <h2>Найкращі пропозиції європейських автомобілів з гарантованою якістю та повною документацією</h2>
                </div>

                <div className='brand-choice'>

                    <div className='brand'>
                        <button>Всі марки</button>
                        <button>Ferari</button>
                        <button>Bugatti</button>
                        <button>Pugani</button>
                        <button>MacLaren</button>
                    </div>

                </div >

                {/* ------------------------------------------------------------------ */}

                <div className='car-ads'>
                    <div className='car-cards'>
                        <div className='car-cards-button '>
                            <div className='car-cards-button-object'>
                                <button><Heart></Heart></button>
                                <button><Eye></Eye></button>
                            </div>
                        </div>

                        <div className='car-cards-top'>
                            <div className='top-cards-for-cars-meaning'>
                                <h1>Bugatti Chiron Pur Sport </h1>
                                <h1>3 000 000 євро</h1>
                                <div className='cross-section-line'></div>

                                <div className='machine-characteristics'>

                                    <div className='characteristic'><Car></Car>5 000 km</div>
                                    <div className='characteristic'><Fuel></Fuel>бензин</div>
                                    <div className='characteristic'><CalendarFold></CalendarFold>2024 рік</div>

                                </div>

                                <div className='car-descriptions'>
                                    <div className='options-description'>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                    </div>
                                </div>

                                <div className='moredetails-contact'>
                                    <div className='options-moredetails-contact'>
                                        <button className='moredetails'>Детальніше</button>
                                        <button className='get-in-touch'>Зв'язатися</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='car-cards'>
                        <div className='car-cards-button ferrari '>
                            <div className='car-cards-button-object'>
                                <button><Heart></Heart></button>
                                <button><Eye></Eye></button>
                            </div>
                        </div>

                        <div className='car-cards-top'>
                            <div className='top-cards-for-cars-meaning'>
                                <h1>Ferrari 488 Spider </h1>
                                <h1>423 000 євро</h1>
                                <div className='cross-section-line'></div>

                                <div className='machine-characteristics'>

                                    <div className='characteristic'><Car></Car>7 000 km</div>
                                    <div className='characteristic'><Fuel></Fuel>бензин</div>
                                    <div className='characteristic'><CalendarFold></CalendarFold>2019 рік</div>

                                </div>

                                <div className='car-descriptions'>
                                    <div className='options-description'>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                    </div>
                                </div>

                                <div className='moredetails-contact'>
                                    <div className='options-moredetails-contact'>
                                        <button className='moredetails'>Детальніше</button>
                                        <button className='get-in-touch'>Зв'язатися</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='car-cards'>
                        <div className='car-cards-button maclaren '>
                            <div className='car-cards-button-object'>
                                <button><Heart></Heart></button>
                                <button><Eye></Eye></button>
                            </div>
                        </div>

                        <div className='car-cards-top'>
                            <div className='top-cards-for-cars-meaning'>
                                <h1>McLaren 570S  </h1>
                                <h1>250 000 євро</h1>
                                <div className='cross-section-line'></div>

                                <div className='machine-characteristics'>

                                    <div className='characteristic'><Car></Car>55 000 km</div>
                                    <div className='characteristic'><Fuel></Fuel>бензин</div>
                                    <div className='characteristic'><CalendarFold></CalendarFold>2017 рік</div>

                                </div>

                                <div className='car-descriptions'>
                                    <div className='options-description'>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                    </div>
                                </div>

                                <div className='moredetails-contact'>
                                    <div className='options-moredetails-contact'>
                                        <button className='moredetails'>Детальніше</button>
                                        <button className='get-in-touch'>Зв'язатися</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='car-cards'>
                        <div className='car-cards-button bugatti '>
                            <div className='car-cards-button-object'>
                                <button><Heart></Heart></button>
                                <button><Eye></Eye></button>
                            </div>
                        </div>

                        <div className='car-cards-top'>
                            <div className='top-cards-for-cars-meaning'>
                                <h1>Bugatti Chiron Pur Sport </h1>
                                <h1>3 800 000 євро</h1>
                                <div className='cross-section-line'></div>

                                <div className='machine-characteristics'>

                                    <div className='characteristic'><Car></Car>1 000 km</div>
                                    <div className='characteristic'><Fuel></Fuel>бензин</div>
                                    <div className='characteristic'><CalendarFold></CalendarFold>2025 рік</div>

                                </div>

                                <div className='car-descriptions'>
                                    <div className='options-description'>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                    </div>
                                </div>

                                <div className='moredetails-contact'>
                                    <div className='options-moredetails-contact'>
                                        <button className='moredetails'>Детальніше</button>
                                        <button className='get-in-touch'>Зв'язатися</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='car-cards'>
                        <div className='car-cards-button pagani '>
                            <div className='car-cards-button-object'>
                                <button><Heart></Heart></button>
                                <button><Eye></Eye></button>
                            </div>
                        </div>

                        <div className='car-cards-top'>
                            <div className='top-cards-for-cars-meaning'>
                                <h1>Pagani Zonda LM </h1>
                                <h1>11 000 000 євро</h1>
                                <div className='cross-section-line'></div>

                                <div className='machine-characteristics'>

                                    <div className='characteristic'><Car></Car>8 000 km</div>
                                    <div className='characteristic'><Fuel></Fuel>бензин</div>
                                    <div className='characteristic'><CalendarFold></CalendarFold>2022 рік</div>

                                </div>

                                <div className='car-descriptions'>
                                    <div className='options-description'>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                    </div>
                                </div>

                                <div className='moredetails-contact'>
                                    <div className='options-moredetails-contact'>
                                        <button className='moredetails'>Детальніше</button>
                                        <button className='get-in-touch'>Зв'язатися</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='car-cards'>
                        <div className='car-cards-button ferrari-f40 '>
                            <div className='car-cards-button-object'>
                                <button><Heart></Heart></button>
                                <button><Eye></Eye></button>
                            </div>
                        </div>

                        <div className='car-cards-top'>
                            <div className='top-cards-for-cars-meaning'>
                                <h1>Ferrari F40 </h1>
                                <h1>3 300 000 євро</h1>
                                <div className='cross-section-line'></div>

                                <div className='machine-characteristics'>

                                    <div className='characteristic'><Car></Car>35 000 km</div>
                                    <div className='characteristic'><Fuel></Fuel>бензин</div>
                                    <div className='characteristic'><CalendarFold></CalendarFold>1992 рік</div>

                                </div>

                                <div className='car-descriptions'>
                                    <div className='options-description'>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                        <div className='descriptions'>опції</div>
                                    </div>
                                </div>

                                <div className='moredetails-contact'>
                                    <div className='options-moredetails-contact'>
                                        <button className='moredetails'>Детальніше</button>
                                        <button className='get-in-touch'>Зв'язатися</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>

    </>)
}