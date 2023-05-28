import { useSession } from "next-auth/react";

const Home = () => {
  const { data: sessionData } = useSession();
  if (sessionData) {
    const {
      user: { name, image },
    } = sessionData;
    return (
      <div>
        <div className="flex items-center justify-between p-7">
          <h1 className="text-center text-xl font-medium leading-none text-black ">
            Hello, {name!.split(" ")[0]}
          </h1>
          <img
            className="ml-1 h-6 w-6"
            src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif"
            alt="hey"
          />
        </div>
      </div>
    );
  }
};

export default Home;
