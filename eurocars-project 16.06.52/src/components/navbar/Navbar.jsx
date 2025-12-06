import './Navbar.css'
import { Phone, SlidersHorizontal } from "lucide-react"
import { Link } from "react-router"
import { useNavigate } from 'react-router'

export const Navbar = () => {
    const navigate = useNavigate()

    return (<>
        <section className='navbar'>
            <div className='navbar-case'>
                <div className='filter-section'>
                    <h1 className='logo-name'>EURO <span>CARS</span></h1>
                    <button className='button-filter'><SlidersHorizontal className='filter-icon'></SlidersHorizontal></button>
                </div>

                <div className='navbar-characteristics'>
                    <div className='characteristics'>
                        <Link to='/'>Home </Link>
                        <Link to='/catalogs'>Catalog </Link>
                        {/* <Link to='/'>Services </Link>
                        <Link to='/'>About us </Link>
                        <Link to='/'>Contacts </Link> */}
                        <div className='Request-a-call'>
                            <button onClick={() => (navigate('/registration'))} >

                                Регестрація </button>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    </>)
}