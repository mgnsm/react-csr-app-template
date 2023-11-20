import "core-js/stable";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.scss";

const root = document.getElementById("root") as Element;
ReactDOM.createRoot(root).render(
  <App />
);