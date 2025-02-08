import BgBanner from "./BgBanner";
import NormalBanner from "./NormalBanner";

const Banners = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Banners Components</h2>

      <NormalBanner></NormalBanner>
      <BgBanner></BgBanner>
    </div>
  );
};

export default Banners;
