import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'


export const AssetContext = createContext('Black Diamond');
export const MoneyContext = createContext(2000);

const GrandPa = () => {
    const [money , setMoney] = useState(2000)
    const asset = 'Diamond'

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>

        <MoneyContext.Provider value={[money , setMoney]}>
        <AssetContext.Provider value="Black Diamond">
        <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
        </section>
        </AssetContext.Provider>
        </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;

// 1: create a context  and export it
// 2: Add provider for the context with a value. value could be anything
// 3: useContext to access value in the context API
// 
