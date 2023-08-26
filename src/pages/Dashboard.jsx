import { useState, useEffect } from "react";
import axios from 'axios';
import Base from "../components/Base";
import MyCard from '../components/BasicInfo';
import BaseToken from "../components/BaseToken";
import QuoteToken from "../components/QuoteToken";
import Price from "../components/Price";

const Dashboard = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      // Fetch data from the API using Axios
      axios
        .get(
          "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
        )
        .then((response) => {
            console.log(response.data.pairs);
            response.data.pairs.length = 10;
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
        <h1 className="text-3xl font-bold text-white">Token Search Results</h1>

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

export default Dashboard;

