import "./Unfavorite.css"
import { useEffect } from "react"
import { cars } from "../../data/cars"
import { CarCard } from "../../data/CarCards"
import { useState, useMemo } from "react"
import { Facebook, Twitter, Instagram, ChevronRight, ChevronLeft } from "lucide-react"

const PER_PAGE = 20

export const Unfavorite = ({ filters }) => {
    const [page, setPage] = useState(1)

    const filteredCars = useMemo(() => {
        return cars.filter(car => {

            if (filters.transportType && car.transportType !== filters.transportType) return false

            if (filters.brand && car.brand !== filters.brand) return false
            if (filters.model && car.model !== filters.model) return false

            if (filters.yearFrom && car.year < +filters.yearFrom) return false
            if (filters.yearTo && car.year > +filters.yearTo) return false

            if (filters.priceFrom && car.price < +filters.priceFrom) return false
            if (filters.priceTo && car.price > +filters.priceTo) return false

            if (filters.region && car.region !== filters.region) return false

            if (filters.mileageFrom && car.mileage < +filters.mileageFrom * 1000) return false
            if (filters.mileageTo && car.mileage > +filters.mileageTo * 1000) return false
            if (filters.noMileage && car.mileage > 0) return false

            if (filters.engineFrom && car.engine < +filters.engineFrom) return false
            if (filters.engineTo && car.engine > +filters.engineTo) return false

            if (
                Object.values(filters.fuel).some(v => v) &&
                !filters.fuel[car.fuel]
            ) return false

            if (
                Object.values(filters.gearbox).some(v => v) &&
                !filters.gearbox[car.gearbox]
            ) return false

            if (
                Object.values(filters.drive).some(v => v) &&
                !filters.drive[car.drive]
            ) return false

            if (filters.accidentStatus === "no" && car.accident === true) return false
            if (filters.accidentStatus === "yes" && car.accident === false) return false

            if (filters.technicalCondition && car.technicalCondition !== filters.technicalCondition) return false
            if (filters.paintwork && car.paintwork !== filters.paintwork) return false

            if (filters.isVat && !car.vat) return false
            if (filters.isNegotiable && !car.negotiable) return false

            return true
        })
    }, [filters])


    useEffect(() => {
        setPage(1)
    }, [filters])



    const start = (page - 1) * PER_PAGE
    const visibleCars = filteredCars.slice(start, start + PER_PAGE)

    const carsNearSidebar = visibleCars.slice(0, 8)

    const nearIds = new Set(carsNearSidebar.map(c => c.id))

    const carsAfterSidebar = visibleCars
        .slice(4)
        .filter(car => !nearIds.has(car.id))




    return (
        <section className="Unfavorite">

            <div className="footer">

                <div className="catalog-layout-near">

                    <div className="cards-near-sidebar">
                        {carsNearSidebar.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>

                </div>

                <div className="catalog-layout-after">

                    <div className="cards-after-sidebar">
                        {carsAfterSidebar.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                </div>



                <div className="pagination-container">
                    <button
                        className="pagination-arrow"
                        onClick={() => setPage(p => Math.max(p - 1, 1))}
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {[...Array(Math.ceil(filteredCars.length / PER_PAGE))].map((_, i) => (
                        <button
                            className={`pagination-number ${page === i + 1 ? "active" : ""}`}
                            key={i}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="pagination-arrow"
                        onClick={() => setPage(p => p + 1)}
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>

                <footer className="euro-footer">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="footer-h2">
                                <h2>
                                    <div className="white">EURO</div>
                                    <samp>CARS</samp>
                                </h2>
                            </div>
                            <p>Преміальне авто із Європи</p>
                        </div>

                        <div className="footer-socials">
                            <a href="#"><Facebook /></a>
                            <a href="#"><Twitter /></a>
                            <a href="#"><Instagram /></a>
                        </div>
                    </div>

                    <div className="footer-lines"></div>

                    <div className="footer-bottom-bar">
                        <p>© 2025 EUROCARS. Всі права захищені.</p>
                        <div className="footer-links">
                            <a href="#">Політика конфіденційності</a>
                            <a href="#">Правова інформація</a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}
