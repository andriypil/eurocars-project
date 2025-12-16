import { Car, Fuel, CalendarFold, Heart, Eye } from "lucide-react"
import { useState, useEffect } from "react"

export const CarCard = ({ car }) => {
    const [liked, setLiked] = useState(false)

    const getLikes = () => {
        try {
            const raw = localStorage.getItem("likes")
            const parsed = raw ? JSON.parse(raw) : []
            return Array.isArray(parsed) ? parsed.map(Number) : []
        } catch {
            return []
        }
    }

    useEffect(() => {
        if (!car?.id) return
        const saved = getLikes()
        setLiked(saved.includes(Number(car.id)))
    }, [car?.id])

    const toggleLike = () => {
        if (!car?.id) return

        const saved = getLikes()
        const id = Number(car.id)

        let updated
        if (saved.includes(id)) {
            updated = saved.filter(x => x !== id)
            setLiked(false)
        } else {
            updated = [...saved, id]
            setLiked(true)
        }

        localStorage.setItem("likes", JSON.stringify(updated))

        window.dispatchEvent(new Event("likes-updated"))
    }


    return (
        <div className="wer">
            <div className="car-cards-button">
                <div className="car-cards-button-object">
                    <button type="button" onClick={toggleLike}>
                        <Heart
                            color={liked ? "red" : "white"}
                            fill={liked ? "red" : "none"}
                        />
                    </button>
                    <button type="button"><Eye /></button>
                </div>
            </div>

            <div className="car-cards-top">
                <div className='top-cards-for-cars-meaning'>
                    <h1>{car.title}</h1>
                    <h1>{car.price.toLocaleString()} {car.currency}</h1>

                    <div className='cross-section-line'></div>

                    <div className="machine-characteristics">
                        <div className="characteristic"><Car /> {car.mileage} km</div>
                        <div className="characteristic"><Fuel /> {car.fuel}</div>
                        <div className="characteristic"><CalendarFold /> {car.year}</div>
                    </div>

                    <div className='car-descriptions'>
                        <div className="options-description">
                            {Array.isArray(car.options) &&
                                car.options.map((opt, i) => (
                                    <div key={i} className="descriptions">{opt}</div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='moredetails-contact'>
                        <div className="options-moredetails-contact">
                            <button className="moredetails" type="button">Детальніше</button>
                            <button className="get-in-touch" type="button">Зв'язатися</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
