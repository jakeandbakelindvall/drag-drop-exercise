import "./App.css";

import FormBody from "../FormBody";
import Tray from "../Tray";
import { ActionButton, TextBox, StaticText } from "../form-elements";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Tray>
        <ActionButton />
        <TextBox />
        <StaticText text="Sign Up" bold titleCase />
      </Tray>
      <FormBody />
    </DndProvider>
  );
};

export default App;
