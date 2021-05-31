import React from "react";
import ReactDOM from "react-dom";

import App from "./src/app.tsx";
if (module && module.hot) module.hot.accept();


ReactDOM.render(<App />, document.querySelector("#root"));
