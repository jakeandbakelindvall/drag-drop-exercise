import "./App.css";

import FormBody from "../FormBody";
import Tray from "../Tray";
import { ActionButton, TextBox, StaticText } from "../form-elements";
import {
  ACTION_BUTTON,
  STATIC_TEXT,
  TEXT_BOX,
} from "../../consts/drag-drop-consts";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";

const App = () => {
  const tray = useSelector((store) => store.tray);
  const formBody = useSelector((store) => store.formBody);

  const renderTrayItems = () => {
    return (
      <Tray>
        {tray.map((item) => {
          switch (item.type) {
            case ACTION_BUTTON:
              return <ActionButton id={item.id} />;
            case STATIC_TEXT:
              return <StaticText text="Sign Up" bold titleCase id={item.id} />;
            case TEXT_BOX:
              return <TextBox id={item.id} />;
            default:
              return <></>;
          }
        })}
      </Tray>
    );
  };
  const renderFormBodyItems = () => {
    return (
      <FormBody>
        {formBody.map((item) => {
          switch (item.type) {
            case ACTION_BUTTON:
              return <ActionButton id={item.id} />;
            case STATIC_TEXT:
              return <StaticText text="Sign Up" bold titleCase id={item.id} />;
            case TEXT_BOX:
              return <TextBox id={item.id} />;
            default:
              return <></>;
          }
        })}
      </FormBody>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {renderTrayItems()}
      {renderFormBodyItems()}
    </DndProvider>
  );
};

export default App;
