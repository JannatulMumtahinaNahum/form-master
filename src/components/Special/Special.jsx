import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Future</h2>
            <p>Grandpa gives him: {asset}</p>
            <p>Also: {gift}</p>
        </div>
    );
};

export default Special;