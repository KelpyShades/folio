// import Image from "next/image";

import Body from "./components/Content/Body";
import ProfileCard from "./components/ProfileCard/ProfileCard";

export default function Home() {
  return (
    <main className=" max-lg:flex-col justify-center gap-10 items-center lg:justify-normal lg:items-start flex p-6">
      <ProfileCard/>
      <Body/>
    </main>
  );
}
