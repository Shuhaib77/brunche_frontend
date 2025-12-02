import Header from "../../../common/layout/header/Header";
import HomeBanner from "./common/components/banner/HomeBanner";
import NewArrivels from "./common/components/newArrivals/NewArrivels";
import FixedImageSection from "./common/components/FixedImageSection/FixedImageSection";

function LandingLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <HomeBanner />
      </div>
      <div className="">
        <NewArrivels />
        <div>
          <FixedImageSection/>
        </div>
      </div>
    </div>
  );
}

export default LandingLayout;
