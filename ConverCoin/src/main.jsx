import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";
import App from "./components/App.jsx";
import Convert from "./routes/convert/convert.jsx";
import History from "./routes/history/history.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
		<Route path="/" element={ <App /> }/>
		<Route path="/convert" element={ <Convert /> }/>
		<Route path="/history" element={ <History /> }/>
	</Routes>
  </BrowserRouter>
);
