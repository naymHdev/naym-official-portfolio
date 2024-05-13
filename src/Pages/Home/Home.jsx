import bg from "../../../Public/background/home-background.png";
import Wizard from "../../Components/Models/Wizard";
import Navigation from "../../Shared/Navigation/Navigation";
import RenderModel from "../Projects/RenderModel";

const Home = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <img
          sizes="100vw"
          src={bg}
          alt="background-image"
          className="-z-50 w-full h-full object-cover object-center"
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
