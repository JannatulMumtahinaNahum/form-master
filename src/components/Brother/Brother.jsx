import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";


const Brother = () => {
     const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>Want to saw Grandpa's Money{money}</p>
        </div>
    );
};

export default Brother;