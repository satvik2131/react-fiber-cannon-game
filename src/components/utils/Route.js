//This will also be responsible for handling levels
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Screen } from "../GameModel/Screen";
import { Homepage } from "../ui/Homepage";
import { Lvlselector } from "../ui/LevelSelector/LvlSelectorUI";

export function Route() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/game",
      element: <Screen />,
    },
    {
      path: "/lvlselector",
      element: <Lvlselector />,
    },
  ]);

  return <RouterProvider router={router} />;
}
