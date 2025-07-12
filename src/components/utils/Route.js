//This will also be responsible for handling levels
import { Screen } from "../GameModel/Screen";
import { Homepage } from "../ui/Homepage";
import { Lvlselector } from "../ui/LevelSelector/LvlSelectorUI";
import { Switch, Route } from "wouter";
import { LoadingScreen } from "../WinCards/utils/RedirectionAndLoading";
import WorkInProgress from "../WinCards/utils/WorkInProgress";

export function Router() {
  return (
    <Switch>
      {/* UI Related pages */}
      <Route path="/" component={Homepage} />
      <Route path="/lvlSelector" component={Lvlselector} />
      <Route path="/game" component={Lvlselector} />
      {/* Game Levels */}
      <Route path="/game/:lvl" component={Screen} />
      <Route path="/loading/:lvl" component={LoadingScreen} />
      <Route path="/wip" component={WorkInProgress} />
    </Switch>
  );
}
