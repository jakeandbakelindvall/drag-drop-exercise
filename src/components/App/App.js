import "./App.css";

import FormBody from "../FormBody";
import Tray from "../Tray";
import { ActionButton, TextBox, StaticText } from "../form-elements";
import {
  ACTION_BUTTON,
  STATIC_TEXT,
  TEXT_BOX,
} from "../../consts/drag-drop-consts";
import { valueMapping } from "../../consts/value-mapping";

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
              return (
                <ActionButton
                  disabled
                  text={valueMapping[item.id]}
                  id={item.id}
                  key={item.id}
                />
              );
            case STATIC_TEXT:
              return (
                <StaticText
                  text={valueMapping[item.id]}
                  bold
                  titleCase
                  id={item.id}
                  key={item.id}
                />
              );
            case TEXT_BOX:
              return (
                <TextBox
                  disabled
                  placeholder={valueMapping[item.id]}
                  id={item.id}
                  key={item.id}
                />
              );
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
              return (
                <ActionButton
                  text={valueMapping[item.id]}
                  id={item.id}
                  key={item.id}
                />
              );
            case STATIC_TEXT:
              return (
                <StaticText
                  text={valueMapping[item.id]}
                  bold
                  titleCase
                  id={item.id}
                  key={item.id}
                />
              );
            case TEXT_BOX:
              return (
                <TextBox
                  placeholder={valueMapping[item.id]}
                  id={item.id}
                  key={item.id}
                />
              );
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
