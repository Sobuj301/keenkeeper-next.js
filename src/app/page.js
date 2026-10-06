import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import Stats from "@/components/Stats";
import Image from "next/image";


const stars = [
  {
    title: "Total Friends",
    count: 10
  },
  {
    title: "On Track",
    count: 3
  },
  {
    title: "Need Attention",
    count: 6
  },
  {
    title: "Interactions This Month",
    count: 12
  }
]
export default function Home() {
  return (
    <div>
      <Banner />
      <Stats stars={stars} />
      <Friends />
    </div>

  );
}
