import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/main.scss";
import {App} from "./Components/App";

const app = (<App/>);
ReactDOM.render(app, document.getElementById("app"));