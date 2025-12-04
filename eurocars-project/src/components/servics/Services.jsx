import './Services.css'
import { ShieldCheck, Truck, Gauge, FileCog, HandCoins, Phone } from "lucide-react"

export const Services = () => {
    return (<>
        <section id='services' className='Services'>
            <div className='information-services-us'>
                <div className='Services-name'>
                    <h1>Наші послуги</h1>
                    <h2>Повний спектр послуг для комфортної покупки європейського автомобіля</h2>
                </div>

                <div className='services-cards'>
                    <div className='info-cards'>
                        <div className='icon'><ShieldCheck size={50} color='white'></ShieldCheck></div>
                        <div className='icon-text'>
                            <h1>Гарантія якості</h1>
                            <h2>Повна перевірка технічного стану, історії та юридичної чистоти автомобіля</h2>
                        </div>
                    </div>


                    <div className='info-cards'><div className='icon'><Truck size={50} color='white'></Truck></div>
                        <div className='icon-text'>
                            <h1>Доставка з Європи</h1>
                            <h2>Організовуємо транспортування автомобіля з будь-якої країни Європи</h2>
                        </div></div>

                    <div className='info-cards'><div className='icon'><Gauge size={50} color='white'></Gauge></div>
                        <div className='icon-text'>
                            <h1>Митне оформлення</h1>
                            <h2>Повне юридичне супроводження та митне оформлення автомобіля</h2>
                        </div></div>

                    <div className='info-cards'><div className='icon'><FileCog size={50} color='white'></FileCog></div>
                        <div className='icon-text'>
                            <h1>Технічна підготовка</h1>
                            <h2>Передпродажна підготовка, ТО та ремонт за потреби</h2>
                        </div></div>

                    <div className='info-cards'><div className='icon'><HandCoins size={50} color='white'></HandCoins></div>
                        <div className='icon-text'>
                            <h1>Фінансування</h1>
                            <h2>Допомога в отриманні кредиту на вигідних умовах</h2>
                        </div></div>

                    <div className='info-cards'><div className='icon'><Phone size={50} color='white'></Phone></div>
                        <div className='icon-text'>
                            <h1>Підтримка 24/7</h1>
                            <h2>Постійна технічна підтримка та консультації після покупки</h2>
                        </div></div>


                </div>

                <div className='Services-name'>
                    <h1>Як це працює</h1>
                    <h2>Простий процес покупки за 5 кроків</h2>
                </div>

                <div className='how-it-works'>

                    <div className='how-it-works-container'>
                        <div className='how-it-works-container-botton'>
                            <div className='line-black line-top'></div>
                            <div className='line-gray line-top'></div>
                            <div className='black-circle'>01</div>
                        </div>

                        <div className='how-it-works-container-text'>
                            <h1>Консультація</h1>
                            <h2>Визначаємо ваші потреби та бюджет</h2>
                        </div>

                    </div>

                    <div className='how-it-works-container'>
                        <div className='how-it-works-container-botton'>
                            <div className='line-black line-top'></div>
                            <div className='line-gray line-top'></div>
                            <div className='black-circle'>02</div>
                        </div>

                        <div className='how-it-works-container-text'>
                            <h1>Пошук</h1>
                            <h2>Знаходимо ідеальний автомобіль в Європі</h2>
                        </div>

                    </div>

                    <div className='how-it-works-container'>
                        <div className='how-it-works-container-botton'>
                            <div className='line-black line-top'></div>
                            <div className='line-gray line-top'></div>
                            <div className='black-circle'>03</div>
                        </div>

                        <div className='how-it-works-container-text'>
                            <h1>Перевірка</h1>
                            <h2>Повна діагностика та юридична перевірка</h2>
                        </div>

                    </div>

                    <div className='how-it-works-container'>
                        <div className='how-it-works-container-botton'>
                            <div className='line-black line-top'></div>
                            <div className='line-gray line-top'></div>
                            <div className='black-circle'>04</div>
                        </div>

                        <div className='how-it-works-container-text'>
                            <h1>Доставка</h1>
                            <h2>Організовуємо транспортування в Україні</h2>
                        </div>

                    </div>

                    <div className='how-it-works-container'>
                        <div className='how-it-works-container-botton'>
                            <div className='black-circle-5'>05</div>
                        </div>

                        <div className='how-it-works-container-text'>
                            <h1>Оформлення</h1>
                            <h2>Мітне оформлення та передача ключів</h2>
                        </div>

                    </div>


                </div>

            </div>
        </section >

    </>)

}

