import './Navbar.css'
import { Phone, SlidersHorizontal, Heart } from "lucide-react"
import { Link, useNavigate } from "react-router"
import { useEffect, useState } from "react"

export const Navbar = () => {
    const navigate = useNavigate()
    const [likesCount, setLikesCount] = useState(0)

    const getLikesCount = () => {
        try {
            const raw = localStorage.getItem("likes")
            const parsed = raw ? JSON.parse(raw) : []
            return Array.isArray(parsed) ? parsed.length : 0
        } catch {
            return 0
        }
    }


    useEffect(() => {
        setLikesCount(getLikesCount())

        const onStorageChange = () => {
            setLikesCount(getLikesCount())
        }

        window.addEventListener("storage", onStorageChange)
        window.addEventListener("likes-updated", onStorageChange)

        return () => {
            window.removeEventListener("storage", onStorageChange)
            window.removeEventListener("likes-updated", onStorageChange)
        }
    }, [])

    return (
        <section className='navbar'>
            <div className='navbar-case'>

                <div className='filter-section'>
                    <h1 className='logo-name'>EURO <span>CARS</span></h1>
                    <button className='button-filter'>
                        <SlidersHorizontal className='filter-icon' />
                    </button>
                </div>

                <div className='navbar-characteristics'>
                    <div className='characteristics'>

                        <Link to='/'>Home</Link>
                        <Link to='/catalogs'>Catalog</Link>

                        <div className="navbar-likes" onClick={() => navigate("/favorites")}>
                            <Heart
                                color={likesCount > 0 ? "red" : "white"}
                                fill={likesCount > 0 ? "red" : "none"}
                            />
                            {likesCount > 0 && (
                                <span className="likes-count">{likesCount}</span>
                            )}
                        </div>

                        <div className='Request-a-call'>
                            <button onClick={() => navigate('/registration')}>
                                Реєстрація
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
