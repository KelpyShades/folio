// import Image from "next/image";

import Content from "./components/Content/Content";
import ProfileCard from "./components/ProfileCard/ProfileCard";

export default function Home() {
  return (
    <main className=" max-lg:flex-col justify-center gap-10 items-center lg:justify-normal lg:items-start flex p-6">
      <ProfileCard/>
      <Content/>
    </main>
  );
}
