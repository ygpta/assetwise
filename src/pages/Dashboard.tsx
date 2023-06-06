import { useSession } from "next-auth/react";
// import { api } from "~/utils/api";

// import walletIcon from "../components/ui/icons/wallet.svg"
// import coinIcon from "../components/ui/icons/coin.svg";
// import tradingUpIcon from "../components/ui/icons/trending-up.svg";
// import tradingDownIcon from "../components/ui/icons/trending-down.svg";
// import inrIcon from "../components/ui/icons/indian-rupee.svg";
// import cashIcon from "../components/ui/icons/cash.svg";
import StocksIcon from "../components/ui/icons/line-chart.svg"

const Home = () => {
  const { data: sessionData } = useSession();

  // const { data, refetch: refetchUsersDetails } =
  //   api.user.getUserDetails.useQuery();

  // const addStock = api.asset.addStock.useMutation({
  //   onSuccess: () => {
  //     void refetchUsersDetails();
  //   },
  // });

  // const updateStock = api.asset.updateStock.useMutation({
  //   onSuccess: () => {
  //     void refetchUsersDetails();
  //   },
  // });
  // const deleteStock = api.asset.deleteStock.useMutation({
  //   onSuccess: () => {
  //     void refetchUsersDetails();
  //   },
  // });
  // if (sessionData && data) {
  //   const {
  //     user: { name },
  //   } = sessionData;
  //   return (
  //     <div>
  //       <div className="flex items-center justify-between pl-10 pt-4">
  //         <h1 className="text-2xl font-semibold ">Hello, {name}</h1>
  //         <img
  //           className="h-8 w-8 ml-2"
  //           src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif"
  //           alt="hey"
  //         />

  //         <div>
  //           {data.stocks.map((i) => (
  //             <div key={i.id} className="mt-5">
  //               {i.name}
  //               <button
  //                 className="ml-4"
  //                 onClick={() =>
  //                   deleteStock.mutate({
  //                     id: i.id,
  //                   })
  //                 }
  //               >
  //                 delete
  //               </button>

  //               <button
  //                 onClick={() => {
  //                   updateStock.mutate({
  //                     name: "icwrerjiefoijefuife4uhjificiioioiwsd bank",
  //                     quantity: 1,
  //                     ticker: "icddddguhffudddcici",
  //                     average_price: 22.2,
  //                     current_price: 25.2,
  //                     marketcap: "large",
  //                     sector: "consumer",
  //                     id: i.id,
  //                   });
  //                 }}
  //               >
  //                 Update the stock
  //               </button>
  //             </div>
  //           ))}
  //         </div>
  //         <button
  //           onClick={() =>
  //             addStock.mutate({
  //               name: "iciciioioiwsd bank",
  //               quantity: 1,
  //               ticker: "icddddguhffudddcici",
  //               average_price: 22.2,
  //               current_price: 25.2,
  //               marketcap: "large",
  //               sector: "consumer",
  //             })
  //           }
  //         >
  //           Click me
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  if (sessionData) {
    const {
      user: { name },
    } = sessionData;
    return (
      <div className="flex flex-col">
        <div className="flex items-center justify-center pl-10 pt-4">
          <h1 className="text-2xl font-medium ">Heya, {name}</h1>
          <img
            className="ml-2 h-8 w-8"
            src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif"
            alt="hey"
          />

          {/* <div>
            {data.stocks.map((i) => (
              <div key={i.id} className="mt-5">
                {i.name}
                <button
                  className="ml-4"
                  onClick={() =>
                    deleteStock.mutate({
                      id: i.id,
                    })
                  }
                >
                  delete
                </button>

                <button
                  onClick={() => {
                    updateStock.mutate({
                      name: "icwrerjiefoijefuife4uhjificiioioiwsd bank",
                      quantity: 1,
                      ticker: "icddddguhffudddcici",
                      average_price: 22.2,
                      current_price: 25.2,
                      marketcap: "large",
                      sector: "consumer",
                      id: i.id,
                    });
                  }}
                >
                  Update the stock
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              addStock.mutate({
                name: "iciciioioiwsd bank",
                quantity: 1,
                ticker: "icddddguhffudddcici",
                average_price: 22.2,
                current_price: 25.2,
                marketcap: "large",
                sector: "consumer",
              })
            }
          >
            Click me
          </button> */}
        </div>

        <div className="flex flex-col">
          <div>Overview</div>

          <div className="flex">
            <div className="flex h-32 w-48 rounded-lg bg-violet-100 md:flex-row">
              <div className="flex">
              <StocksIcon className="m-2 p-2 h-8 w-8 rounded-full bg-violet-300 font-bold text-black" />
                <div className="mt-2 text-lg">Stocks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
