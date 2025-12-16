import { useEffect, useState } from "react"
import { cars } from "../data/cars"
import { CarCard } from "../data/CarCards"

export const Favorites = () => {
    const [likedCars, setLikedCars] = useState([])

    const loadFavorites = () => {
        try {
            const raw = localStorage.getItem("likes")
            const ids = raw ? JSON.parse(raw).map(String) : []
            setLikedCars(cars.filter(car => ids.includes(String(car.id))))
        } catch {
            setLikedCars([])
        }
    }

    useEffect(() => {
        loadFavorites()
        window.addEventListener("likes-updated", loadFavorites)
        return () => window.removeEventListener("likes-updated", loadFavorites)
    }, [])

    if (!likedCars.length) {
        return (
            <section style={{ padding: "4rem", textAlign: "center" }}>
                <h2>Обраних авто поки немає</h2>
            </section>
        )
    }

    return (
        <section className="favorites">
            <div className="favorites-grid">
                {likedCars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </section>
    )
}
