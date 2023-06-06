import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Assets = () => {
  const { data: sessionData } = useSession();

  const { data, refetch: refetchUsersDetails } =
    api.user.getUserDetails.useQuery();

  const addStock = api.asset.addStock.useMutation({
    onSuccess: () => {
      void refetchUsersDetails();
    },
  });

  const updateStock = api.asset.updateStock.useMutation({
    onSuccess: () => {
      void refetchUsersDetails();
    },
  });
  const deleteStock = api.asset.deleteStock.useMutation({
    onSuccess: () => {
      void refetchUsersDetails();
    },
  });
  if (sessionData && data) {
    return (
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 font-mono">Stocks</th>
              <th className="px-4 py-2 font-mono">Quantity</th>
              <th className="px-4 py-2 font-mono">Avg.Buy Price</th>
              <th className="px-4 py-2 font-mono">LTP</th>
              <th className="px-4 py-2 font-mono">Current Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Intro to CSS</td>
              <td className="border px-4 py-2">Adam</td>
              <td className="border px-4 py-2">858</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return <h1>Loading ....</h1>;
};

export default Assets;

// "stocks": [
//                         {
//                             "id": "clihrmfc00001ahq4tqzvjt6c",
//                             "name": "iciciioioiwsd bank",
//                             "ticker": "icddddguhffudddcici",
//                             "quantity": 1,
//                             "average_price": "22.2",
//                             "current_price": "25.2",
//                             "marketcap": "large",
//                             "sector": "consumer",
//                             "stocksId": "clie20lbd0000ah5ndjdwigpy"
//                         }
//                     ],

// colSpan={1}
