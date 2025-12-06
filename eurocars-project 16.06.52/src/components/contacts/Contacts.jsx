import "./Contacts.css"

import { Instagram, Twitter, Facebook, Send } from "lucide-react"

export const Contacts = () => {
    return (<>

        <section id="contacts" className="Contacts">
            <div className="contacts-information">
                <div className="contacts-section">
                    <div className="section sectin-padding">
                        <h1 className="section-h1">EURO <span>CARS</span></h1>
                        <h2>Ваш надійний партнер у світі європейських автомобілів. Якість, професіоналізм та індивідуальний підхід.</h2>
                        <div className="section-icon">
                            <a href="" className="social-networks"><Instagram size={38}></Instagram></a>
                            <a href="" className="social-networks"><Twitter size={38}></Twitter></a>
                            <a href="" className="social-networks"><Facebook size={38}></Facebook></a>
                            <a href="" className="social-networks"><Send size={38}></Send></a>
                        </div>
                    </div>
                    <div className="section padding">

                        <h1 className="text-h1">Швидкі посилання</h1>
                        <div className="Quick-links ">
                            <a href="">Головна</a>
                            <a href="">Каталог</a>
                            <a href="">Послуги</a>
                            <a href="">Про нас</a>
                            <a href="">Контакти</a>
                        </div>
                    </div>


                    <div className="section">
                        <h1 className="text-h1">Послуги</h1>
                        <div className="Quick-links">
                            <a href="">Імпорт з європи</a>
                            <a href="">Митне оформлення</a>
                            <a href="">Технічна перерва</a>
                            <a href="">Фінансування</a>
                            <a href="">Контакти</a>
                        </div>
                    </div>
                    <div className="section">
                        <h1 className="text-h1">Контакти</h1>
                        <div className="contaction">
                            <h2><span>Адреса:</span><br />вул. Хрещатик, 25 <br />Київ, Україна</h2>
                            <h2><span>Телефон:</span><br />+380 67 123 45 67</h2>
                            <h2><span>Електронна пошта:</span><br />info@eurocar.ua</h2>
                        </div>
                    </div>
                </div>

                <div className='contacts-line'>
                    <div className='lines'></div>
                </div>

                {/* --------------- */}
                <div className="contacts-polisy">
                    <div className="polisy">
                        <h2>© 2025 EUROCARS. Всі права захищені.</h2>
                        <div className="polisy-h3">
                            <h3>Політика конфіденційність</h3>
                            <h3>Правова інформація</h3>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    </>)
}