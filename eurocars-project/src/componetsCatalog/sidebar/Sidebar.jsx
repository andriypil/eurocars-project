import './Sidebar.css'
import { useState } from 'react';

const initialFiltersState = {
    transportType: '',
    brand: '',
    model: '',
    yearFrom: '',
    yearTo: '',
    priceFrom: '',
    priceTo: '',
    currency: 'usd',
    isVat: false,
    isNegotiable: false,
    region: '',
    mileageFrom: '',
    mileageTo: '',
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
        cardan: false,
        chain: false,
        belt: false,
    },
    engineFrom: '',
    engineTo: '',
    accidentStatus: '',
    technicalCondition: '',
    paintwork: '',
};


export const Sidebar = () => {

    const [filters, setFilters] = useState(initialFiltersState);

    const [isGearboxOpen, setIsGearboxOpen] = useState(false);
    const [isFuelOpen, setIsFuelOpen] = useState(false);
    const [isDriveTypeOpen, setIsDriveTypeOpen] = useState(false);

    const handleCheckboxGroupChange = (e) => {
        const { name, checked, dataset } = e.target;
        const group = dataset.group;

        setFilters(prevFilters => ({
            ...prevFilters,
            [group]: {
                ...prevFilters[group],
                [name]: checked
            }
        }));
    };


    const handleReset = () => {
        setFilters(initialFiltersState);
        setIsGearboxOpen(false);
        setIsFuelOpen(false);
        setIsDriveTypeOpen(false);
    };


    return (<>
        <section className="Sidebar">
            <form className='Sidebar-filter' onReset={handleReset}>
                <div className='deception'></div>
                <div className='line'></div>

                <div className='car-type'>

                    <p >Тип транспорту</p>
                    <select
                        className='types-of-transport'
                        name="transportType"
                        id="transport-select"
                        value={filters.transportType}
                        onChange={(e) => setFilters({ ...filters, transportType: e.target.value })}
                    >
                        <option value="">Усі типи транспорту</option>
                        <option value="Passenger cars">Легкові</option>
                        <option value="Motto">Мото</option>
                        <option value="Buses">Автобуси</option>
                    </select>

                    <p>Марка</p>
                    <select
                        className='types-of-transport'
                        name="brand"
                        id="brand-select"
                        value={filters.brand}
                        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                    >
                        <option value="">Оберіть</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Toyota">Toyota</option>
                    </select>

                    <p>Модель</p>
                    <select
                        className='types-of-transport'
                        name="model"
                        id="model-select"
                        value={filters.model}
                        onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                    >
                        <option value="">Оберіть</option>
                        <option value="Passenger cars">Легкові</option>
                        <option value="Motto">Мото</option>
                        <option value="Buses">Автобуси</option>
                    </select>

                    <p>Рік</p>
                    <div className='year'>
                        <div>
                            <input
                                type="number"
                                name="yearFrom"
                                placeholder=" Від"
                                min="1960"
                                max="2025"
                                value={filters.yearFrom}
                                onChange={(e) => setFilters({ ...filters, yearFrom: e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                name="yearTo"
                                placeholder=" До"
                                min="1960"
                                max="2025"
                                value={filters.yearTo}
                                onChange={(e) => setFilters({ ...filters, yearTo: e.target.value })}
                            />
                        </div>
                    </div>

                </div>

                <div className='line'></div>

                <div className='price-region'>
                    <p>Ціна</p>
                    <div className='price'>
                        <div>
                            <input
                                type="number"
                                name="priceFrom"
                                placeholder=" Від"
                                min="0"
                                value={filters.priceFrom}
                                onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                name="priceTo"
                                placeholder=" До"
                                min="0"
                                value={filters.priceTo}
                                onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
                            />
                        </div>
                        <select
                            name="currency"
                            value={filters.currency}
                            onChange={(e) => setFilters({ ...filters, currency: e.target.value })}
                        >
                            <option value="usd">$</option>
                            <option value="eur">€</option>
                            <option value="uah">₴</option>
                        </select>
                    </div>

                    <div className='checkbox'>
                        <input
                            type="checkbox"
                            id="vat_included"
                            name="isVat"
                            className="custom-checkbox"
                            checked={filters.isVat}
                            onChange={(e) => setFilters({ ...filters, isVat: e.target.checked })}
                        />
                        <label htmlFor="vat_included">Ціна з ПДВ</label>
                    </div>

                    <div className='checkbox'>
                        <input
                            type="checkbox"
                            id="negotiable"
                            name="isNegotiable"
                            className="custom-checkbox"
                            checked={filters.isNegotiable}
                            onChange={(e) => setFilters({ ...filters, isNegotiable: e.target.checked })}
                        />
                        <label htmlFor="negotiable">Можливий торг</label>
                    </div>

                    <p>Регіон</p>
                    <select
                        className='types-of-transport'
                        name="region"
                        id="region-select"
                        value={filters.region}
                        onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                    >
                        <option value="">Будь-який </option>
                        <option value="Transcarpathia">Закарпаття</option>
                        <option value="Volyn">Волинь</option>
                        <option value="Kyiv-region">Київщина</option>
                    </select>
                </div>

                <div className='line'></div>
                <div className='characteristic-car'>

                    <p>Пробіг (тис. км)</p>
                    <div className='run'>
                        <input
                            type="number"
                            name="mileageFrom"
                            placeholder="Від"
                            min="0"
                            value={filters.mileageFrom}
                            onChange={(e) => setFilters({ ...filters, mileageFrom: e.target.value })}
                        />
                        <input
                            type="number"
                            name="mileageTo"
                            placeholder="До"
                            min="0"
                            value={filters.mileageTo}
                            onChange={(e) => setFilters({ ...filters, mileageTo: e.target.value })}
                        />
                    </div>

                    <div className='checkbox '>
                        <input
                            type="checkbox"
                            id="no_mileage"
                            name="noMileage"
                            className="custom-checkbox"
                            checked={filters.noMileage}
                            onChange={(e) => setFilters({ ...filters, noMileage: e.target.checked })}
                        />
                        <label htmlFor="no_mileage">Без пробігу</label>
                    </div>

                    <p>Коробка передач</p>

                    <div className='checkbox'>
                        <input
                            type="checkbox"
                            id="manual_gearbox"
                            name="manual"
                            data-group="gearbox"
                            className="custom-checkbox"
                            checked={filters.gearbox.manual}
                            onChange={handleCheckboxGroupChange}
                        />
                        <label htmlFor="manual_gearbox">Ручна / Механіка</label>
                    </div>
                    <div className='checkbox'>
                        <input
                            type="checkbox"
                            id="auto_gearbox"
                            name="auto"
                            data-group="gearbox"
                            className="custom-checkbox"
                            checked={filters.gearbox.auto}
                            onChange={handleCheckboxGroupChange}
                        />
                        <label htmlFor="auto_gearbox">Автомат</label>
                    </div>


                    {isGearboxOpen && (
                        <div id="hidden-gearbox-options">
                            <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    id="cvt_gearbox"
                                    name="cvt"
                                    data-group="gearbox"
                                    className="custom-checkbox"
                                    checked={filters.gearbox.cvt}
                                    onChange={handleCheckboxGroupChange}
                                />
                                <label htmlFor="cvt_gearbox">Варіатор</label>
                            </div>
                            <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    id="tiptronic_gearbox"
                                    name="tiptronic"
                                    data-group="gearbox"
                                    className="custom-checkbox"
                                    checked={filters.gearbox.tiptronic}
                                    onChange={handleCheckboxGroupChange}
                                />
                                <label htmlFor="tiptronic_gearbox">Типтронік</label>
                            </div>
                            <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    id="robot_gearbox"
                                    name="robot"
                                    data-group="gearbox"
                                    className="custom-checkbox"
                                    checked={filters.gearbox.robot}
                                    onChange={handleCheckboxGroupChange}
                                />
                                <label htmlFor="robot_gearbox">Роботизована</label>
                            </div>
                            <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    id="reducer_gearbox"
                                    name="reducer"
                                    data-group="gearbox"
                                    className="custom-checkbox"
                                    checked={filters.gearbox.reducer}
                                    onChange={handleCheckboxGroupChange}
                                />
                                <label htmlFor="reducer_gearbox">Редуктор</label>
                            </div>
                        </div>
                    )}
                    <button className='show-more' type="button" onClick={() => setIsGearboxOpen(!isGearboxOpen)}>
                        {isGearboxOpen ? 'Сховати' : 'Показати ще'}
                    </button>

                    <p>Паливо</p>
                    <div className='fuel-type'>
                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="fuel_petrol"
                                name="petrol"
                                data-group="fuel"
                                className="custom-checkbox"
                                checked={filters.fuel.petrol}
                                onChange={handleCheckboxGroupChange}
                            />
                            <label htmlFor="fuel_petrol">Бензин</label>
                        </div>
                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="fuel_diesel"
                                name="diesel"
                                data-group="fuel"
                                className="custom-checkbox"
                                checked={filters.fuel.diesel}
                                onChange={handleCheckboxGroupChange}
                            />
                            <label htmlFor="fuel_diesel">Дизель</label>
                        </div>
                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="fuel_gas"
                                name="gas"
                                data-group="fuel"
                                className="custom-checkbox"
                                checked={filters.fuel.gas}
                                onChange={handleCheckboxGroupChange}
                            />
                            <label htmlFor="fuel_gas">Газ</label>
                        </div>
                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="fuel_hybrid"
                                name="hybrid"
                                data-group="fuel"
                                className="custom-checkbox"
                                checked={filters.fuel.hybrid}
                                onChange={handleCheckboxGroupChange}
                            />
                            <label htmlFor="fuel_hybrid">Гібрид</label>
                        </div>
                        {isFuelOpen && (
                            <div id="hidden-fuel-options">
                                <div className='checkbox'>
                                    <input
                                        type="checkbox"
                                        id="fuel_electric"
                                        name="electric"
                                        data-group="fuel"
                                        className="custom-checkbox"
                                        checked={filters.fuel.electric}
                                        onChange={handleCheckboxGroupChange}
                                    />
                                    <label htmlFor="fuel_electric">Електро</label>
                                </div>
                                <div className='checkbox'>
                                    <input
                                        type="checkbox"
                                        id="fuel_gas_petrol"
                                        name="gas_petrol"
                                        data-group="fuel"
                                        className="custom-checkbox"
                                        checked={filters.fuel.gas_petrol}
                                        onChange={handleCheckboxGroupChange}
                                    />
                                    <label htmlFor="fuel_gas_petrol">Газ / Бензин</label>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className='show-more' type="button" onClick={() => setIsFuelOpen(!isFuelOpen)}>
                        {isFuelOpen ? 'Сховати' : 'Показати ще'}
                    </button>

                    <p>Тип приводу</p>
                    <div className='drive-type'>
                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="drive_awd"
                                name="awd"
                                data-group="drive"
                                className="custom-checkbox"
                                checked={filters.drive.awd}
                                onChange={handleCheckboxGroupChange}
                            />
                            <label htmlFor="drive_awd">Повний</label>
                        </div>
                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="drive_fwd"
                                name="fwd"
                                data-group="drive"
                                className="custom-checkbox"
                                checked={filters.drive.fwd}
                                onChange={handleCheckboxGroupChange}
                            />
                            <label htmlFor="drive_fwd">Передній</label>
                        </div>
                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="drive_rwd"
                                name="rwd"
                                data-group="drive"
                                className="custom-checkbox"
                                checked={filters.drive.rwd}
                                onChange={handleCheckboxGroupChange}
                            />
                            <label htmlFor="drive_rwd">Задній</label>
                        </div>
                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="drive_cardan"
                                name="cardan"
                                data-group="drive"
                                className="custom-checkbox"
                                checked={filters.drive.cardan}
                                onChange={handleCheckboxGroupChange}
                            />
                            <label htmlFor="drive_cardan">Кардан</label>
                        </div>

                        {isDriveTypeOpen && (
                            <div id="hidden-drive-options">
                                <div className='checkbox'>
                                    <input
                                        type="checkbox"
                                        id="drive_chain"
                                        name="chain"
                                        data-group="drive"
                                        className="custom-checkbox"
                                        checked={filters.drive.chain}
                                        onChange={handleCheckboxGroupChange}
                                    />
                                    <label htmlFor="drive_chain">Ланцюг</label>
                                </div>
                                <div className='checkbox'>
                                    <input
                                        type="checkbox"
                                        id="drive_belt"
                                        name="belt"
                                        data-group="drive"
                                        className="custom-checkbox"
                                        checked={filters.drive.belt}
                                        onChange={handleCheckboxGroupChange}
                                    />
                                    <label htmlFor="drive_belt">Ремінь</label>
                                </div>
                            </div>
                        )}
                        <button className='show-more' type="button" onClick={() => setIsDriveTypeOpen(!isDriveTypeOpen)}>
                            {isDriveTypeOpen ? 'Сховати' : 'Показати ще'}
                        </button>
                    </div>

                    <p>Об'єм двигуна (л.)</p>
                    <div className='engine-volume'>
                        <div className='inputs-wrapper'>
                            <input
                                type="number"
                                name="engineFrom"
                                placeholder="Від"
                                min="0"
                                step="0.1"
                                value={filters.engineFrom}
                                onChange={(e) => setFilters({ ...filters, engineFrom: e.target.value })}
                            />
                            <input
                                type="number"
                                name="engineTo"
                                placeholder="До"
                                min="0"
                                step="0.1"
                                value={filters.engineTo}
                                onChange={(e) => setFilters({ ...filters, engineTo: e.target.value })}
                            />
                        </div>
                    </div>

                    <p>Стан</p>
                    <div className='car-condition'>
                        <select
                            className='types-of-transport'
                            name="accidentStatus"
                            value={filters.accidentStatus}
                            onChange={(e) => setFilters({ ...filters, accidentStatus: e.target.value })}
                        >
                            <option value="" disabled>Участь в ДТП</option>
                            <option value="any">Будь-який стан</option>
                            <option value="no">Не був у ДТП</option>
                            <option value="yes">Був у ДТП</option>
                        </select>
                        <select
                            className='types-of-transport'
                            name="technicalCondition"
                            value={filters.technicalCondition}
                            onChange={(e) => setFilters({ ...filters, technicalCondition: e.target.value })}
                        >
                            <option value="" disabled>Технічний стан</option>
                            <option value="any">Будь-який</option>
                            <option value="good">Повністю справний</option>
                            <option value="minor_repairs">Потребує дрібного ремонту</option>
                            <option value="needs_repair">Потребує ремонту</option>
                        </select>
                        <select
                            className='types-of-transport'
                            name="paintwork"
                            value={filters.paintwork}
                            onChange={(e) => setFilters({ ...filters, paintwork: e.target.value })}
                        >
                            <option value="" disabled>Лакофарбове покриття</option>
                            <option value="any">Будь-яке</option>
                            <option value="like_new">Як нове (без дефектів)</option>
                            <option value="minor_defects">Дрібні подряпини / сколи</option>
                            <option value="repainted">Є перефарбовані частини</option>
                        </select>
                    </div>


                    <button
                        type="reset"
                        className="reset-button"
                    >
                        Скинути всі фільтри
                    </button>




                </div>
                <div className='poster'></div>
            </form>
        </section>
    </>)
}