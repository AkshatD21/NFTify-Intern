import { useState, useEffect } from "react";
import axios from 'axios';
import Base from "../components/Base";
import MyCard from '../components/BasicInfo';
import BaseToken from "../components/BaseToken";
import QuoteToken from "../components/QuoteToken";
import Price from "../components/Price";

const Pair = () => {  
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      // Fetch data from the API using Axios
      axios
        .get(
          "https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae"
        )
        .then((response) => {
          console.log(response.data.pairs);
          setApiData(response.data.pairs);
          //   if (Array.isArray(response.data)) {

          //   } else {
          //     console.error("API response is not an array:", response.data);
          //   }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    
  return (
      <Base>
        <h1 className="text-3xl font-bold">Token Search Results</h1>

        {apiData.length > 0 &&
          apiData.map((item, index) => {
            
            console.log(item);
            return (
              <div className="grid grid-cols-4 gap-5">
                <MyCard key={item.id} item={item} />
                <BaseToken key={item.id} item={item} />
                <Price key={item.id} item={item} />
                <QuoteToken key={item.id} item={item} />
              </div>
            );
          })}
      </Base>
  );
};

export default Pair;

