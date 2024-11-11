import Navbar from "./component/navbar";
import Hero from "./component/hero";
import WorkManagment from "./component/work-managment";
import Customize from "./component/customize";
import Customize2 from "./component/customize2";
import YourWork from "./component/your-work";
import Sponsors from "./component/Sponsors";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WorkManagment/>
      <Customize/>
      <Customize2/>
      <YourWork/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}
