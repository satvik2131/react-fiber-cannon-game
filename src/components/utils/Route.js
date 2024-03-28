//This will also be responsible for handling levels
import { Screen } from "../GameModel/Screen";
import { Homepage } from "../ui/Homepage";
import { Lvlselector } from "../ui/LevelSelector/LvlSelectorUI";
import { Switch, Route } from "wouter";

export function Router() {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
      <Route path="/game/:lvl" component={Screen} />
      <Route path="/lvlselector" component={Lvlselector} />
    </Switch>
  );
}
