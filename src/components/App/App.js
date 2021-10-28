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
import React from "react";

const App = () => {
  const tray = useSelector((store) => store.tray.items);
  const formBody = useSelector((store) => store.formBody.items);

  // Subscribe to store updates to the state of draggable items.
  // The store operates on indices in-place, and never can modify
  // the amount of objects in a given `items` array, leading to
  // components that can be somewhat agnostic about rendering their
  // children grids
  const renderTrayItems = () => {
    return (
      <Tray>
        {tray.map((item, i) => {
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
              return <React.Fragment key={i}></React.Fragment>;
          }
        })}
      </Tray>
    );
  };
  const renderFormBodyItems = () => {
    return (
      <FormBody>
        {formBody.map((item, i) => {
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
              return <React.Fragment key={i}></React.Fragment>;
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
