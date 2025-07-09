//This will also be responsible for handling levels
import { Screen } from "../GameModel/Screen";
import { Homepage } from "../ui/Homepage";
import { Lvlselector } from "../ui/LevelSelector/LvlSelectorUI";
import { Switch, Route } from "wouter";
import { LoadingScreen } from "../WinCards/utils/RedirectionAndLoading";

export function Router() {
  return (
    <Switch>
      {/* UI Related pages */}
      <Route path="/" component={Homepage} />
      <Route path="/lvlSelector" component={Lvlselector} />
      {/* Game Levels */}
      <Route path="/game/:lvl" component={Screen} />
      <Route path="/loading/:lvl" component={LoadingScreen} />
    </Switch>
  );
}
