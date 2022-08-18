//--- IMPORTING REACT AND REACT DOM FOR RENDER
import React from "react";
import { createRoot } from "react-dom/client"; // REACT 18
import Functioncomponent from "./components/Functioncomponen";
import ClassComponent from "./components/ClassComponent";

const root = createRoot(document.getElementById("root")); //SINCE REACT 18 WE NEED TO USE CREATEROOT FUNCTION TO REDER COMPONENTS

root.render(
  <div>
    <h4>Hello World</h4>
    <h4>Hello World 2 </h4>
    <Functioncomponent name="Elian" />
    <ClassComponent />
  </div>
);

/* --- NOTES

1° WE CAN'T RENDER MANY COMPONENTS, ALL COMPONENTS NEED TO BE ON A SINGLE COMPONENT (IN THIS CASE THE DIV)
*/
