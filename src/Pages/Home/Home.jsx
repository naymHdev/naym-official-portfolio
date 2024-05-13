import bg from "../../../Public/background/home-background.png";
import Wizard from "../../Components/Models/Wizard";
import Navigation from "../../Shared/Navigation/Navigation";
import RenderModel from "../Projects/RenderModel";

const Home = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <div className=" bg-black w-full h-full min-h-screen -z-10 opacity-20" />
        <img
          sizes="100vw"
          src={bg}
          alt="background-image"
          className="-z-50 w-full h-full object-cover object-center fixed"
        />

        <div className="w-full h-screen absolute">
          <Navigation />
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </main>
    </>
  );
};

export default Home;
