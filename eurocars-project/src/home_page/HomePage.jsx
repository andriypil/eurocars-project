import { Home } from '../components/home/Home'
import { Catalogs } from '../components/catalog/Catalogs'
import { Services } from '../components/servics/Services'
import { AboutAs } from '../components/about-as/AboutAs'
import { Contacts } from '../components/contacts/Contacts'




export const HomePage = () => {
    return (<>
        <Home></Home>
        <Catalogs></Catalogs>
        <Services></Services>
        <AboutAs></AboutAs>
        <Contacts></Contacts>

    </>)
}