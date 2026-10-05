import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Stats />
      <Friends />
    </div>

  );
}
