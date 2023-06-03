// import axios from "axios";

// export default function data({ data }: any) {
//   console.log(data[data.length - 1]);

//   return <div>hello</div>;
// }

// export async function getStaticProps() {
//   const res = await axios.get(
//     "https://www.livemint.com/api/cms/goldsilver/gethistoricaldata/gold/jaipur/30"
//   );
//   const data = res.data;

//   return {
//     props: {
//       data,
//     },
//   };
// }

import { useEffect, useState } from "react";

interface goldProp {
  id: string;
  city: string;
  displayName: string;
  state: string;
  date: string;
  price22Cr: string;
  price24Cr: string;
  change22Cr: string;
  change24Cr: string;
}

export default function Gold() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.livemint.com/api/cms/goldsilver/gethistoricaldata/gold/jaipur/30"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  console.log("gold",data)
  return <div>testu{data[0]}</div>;
}
