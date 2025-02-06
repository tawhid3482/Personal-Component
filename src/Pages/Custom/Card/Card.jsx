import BgCard from "./Bg-Card";
import HoverCard from "./HoverCard";
import NormalCard from "./NormalCard";

const Card = () => {
  return (
    <div>
      <NormalCard></NormalCard>
      <HoverCard></HoverCard>
      <BgCard></BgCard>
    </div>
  );
};

export default Card;
