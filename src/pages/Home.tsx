import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Home = () => {
  const { data: sessionData } = useSession();

  const { data, refetch: refetchUsersDetails } =
    api.user.getUserDetails.useQuery();

  const addStock = api.asset.addStocks.useMutation({
    onSuccess: () => {
      void refetchUsersDetails();
    },
  });

  if (sessionData && data) {
    const {
      user: { name },
    } = sessionData;
    return (
      <div>
        <div className="flex items-center justify-between pl-4 pt-4">
          <h1 className="text-3xl font-medium ">Hello, {name}</h1>
          <img
            className="h-8 w-8"
            src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif"
            alt="hey"
          />

          <div>
            {data.stocks.map((i) => (
              <div key={i.id} className="mt-5">
                {i.name}
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
          </button>
        </div>
      </div>
    );
  }
};

export default Home;
