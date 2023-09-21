//This will also be responsible for handling levels
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GameScreen } from "../GameModel/GameScreen";
import { Intro } from "../ui/Intro";
import { Lvlselector } from "../ui/LevelSelector/LvlSelectorUI";

export function Route() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/game",
      element: <GameScreen />,
    },
    {
      path: "/lvlselector",
      element: <Lvlselector />,
    },
  ]);

  return <RouterProvider router={router} />;
}
