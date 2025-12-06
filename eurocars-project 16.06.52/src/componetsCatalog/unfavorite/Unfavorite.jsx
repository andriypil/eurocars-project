import './Unfavorite.css'
import { useState } from 'react'
import { Facebook, Twitter, Instagram, ChevronRight, ChevronLeft } from "lucide-react";
import { UnfavoritePage1 } from './slider/Unfavorite1';
import { UnfavoritePage2 } from './slider/Unfavorite2';
import { UnfavoritePage3 } from './slider/Unfavorite3';
import { UnfavoritePage4 } from './slider/Unfavorite4';
import { UnfavoritePage5 } from './slider/Unfavorite5';

export const Unfavorite = () => {
    const [page, setPage] = useState(1);
    const nextPage = () => {
        if (page < 5) {
            setPage(page + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToPage = (n) => {
        setPage(n);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className='Unfavorite'>
            <div className='unfavorite-cards'>
                {page === 1 && <UnfavoritePage1 />}
                {page === 2 && <UnfavoritePage2 />}
                {page === 3 && <UnfavoritePage3 />}
                {page === 4 && <UnfavoritePage4 />}
                {page === 5 && <UnfavoritePage5 />}
            </div>
            <div className='footer'>
                <div className='pagination-container'>
                    <button className='pagination-arrow' onClick={prevPage}><ChevronLeft size={54} /></button>

                    {[1, 2, 3, 4, 5].map(num => (
                        <button
                            key={num}
                            className={`pagination-number ${page === num ? 'active' : ''}`}
                            onClick={() => goToPage(num)}
                        >
                            {num}
                        </button>
                    ))}

                    <button className='pagination-arrow' onClick={nextPage}><ChevronRight size={54} /></button>

                </div>

                <footer className='euro-footer'>
                    <div className='footer-content'>
                        <div className='footer-brand'>
                            <div className='footer-h2'>
                                <h2><div className='white'>EURO</div> <samp>CARS</samp></h2>
                            </div>
                            <p>Преміальне авто із Європи</p>
                        </div>
                        <div className='footer-socials'>
                            <a href="#" aria-label="Facebook"><Facebook /></a>
                            <a href="#" aria-label="Twitter"><Twitter /></a>
                            <a href="#" aria-label="Instagram"><Instagram /></a>
                        </div>
                    </div>

                    <div className='footer-lines'></div>
                    <div className='footer-bottom-bar'>
                        <p>© 2025 EUROCARS. Всі права захищені.</p>
                        <div className='footer-links'>
                            <a href="#">Політика конфіденційності</a>
                            <a href="#">Правова інформація</a>
                        </div>
                    </div>
                </footer>
            </div>

        </section>
    );
};
