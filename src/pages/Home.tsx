import { useSession } from "next-auth/react";
import { clearConfigCache } from "prettier";
import { api } from "~/utils/api";

const Home = () => {
  const { data: sessionData } = useSession();
  const { data}=api.user.getUserDetails.useQuery()
console.log("homedata",data)  
  
  if (sessionData) {
    const {
      user: { name, image },
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
        </div>
      </div>
    );
  }
};

export default Home;
