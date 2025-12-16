import { useState } from "react";
import { Sidebar } from "../componetsCatalog/sidebar/Sidebar";
import { Unfavorite } from "../componetsCatalog/unfavorite/Unfavorite";

const initialFiltersState = {
    transportType: "",
    brand: "",
    model: "",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    currency: "eur",
    isVat: false,
    isNegotiable: false,
    region: "",
    mileageFrom: "",
    mileageTo: "",
    noMileage: false,
    gearbox: {
        manual: false,
        auto: false,
        cvt: false,
        tiptronic: false,
        robot: false,
        reducer: false,
    },
    fuel: {
        petrol: false,
        diesel: false,
        gas: false,
        hybrid: false,
        electric: false,
        gas_petrol: false,
    },
    drive: {
        awd: false,
        fwd: false,
        rwd: false,
    },
    engineFrom: "",
    engineTo: "",
    accidentStatus: "",
    technicalCondition: "",
    paintwork: "",
}

export const Catalog = () => {
    const [filters, setFilters] = useState(initialFiltersState);

    return (
        <section className="catalog-page">
            <Unfavorite filters={filters} />
            <Sidebar filters={filters} setFilters={setFilters} />
        </section>
    );
};
