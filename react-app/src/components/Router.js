
import App from "./App";
import {Routes, Route} from "react-router-dom";

// Описываем базовый роутинг приложения

function Router() {
    return(
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>

    )
}

export default Router