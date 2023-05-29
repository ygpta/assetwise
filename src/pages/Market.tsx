import { useEffect, useRef, useState } from "react";

function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}

const Market = () => {
  const [data, setData] = useState([]);

  useInterval(() => {
    fetchData();
  }, 6000);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api-stock.financialexpress.com/finance-api/nse/index/nifty-50/day"
      );
      const { companies } = await response.json();
      setData(companies);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  console.log("market data", data);

  return (
    <div>
      <div className="flex items-center justify-between pl-4 pt-4">
        {/* {data.map((i) => (
          <li key={security_code}>{i.security_code}</li>
        ))} */}
        <h1>Market Page</h1>
      </div>
    </div>
  );
};

export default Market;
