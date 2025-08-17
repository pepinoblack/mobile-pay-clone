"use client";
import Navbar from "./componentes/navbar/page";
import Favorites from "./componentes/favorites/page";
import Suggested from "./componentes/suggested/page";
import BottomMenu from "./componentes/menu/page";

export default function Home() {
  return (
    <main>
      <Navbar username="Carlos" />
      <Favorites />
      <Suggested />
      <BottomMenu/>
    </main>
  );
}
