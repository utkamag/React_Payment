import Payment from "./Payment";
import App from "./App";
import {Routes, Route} from "react-router-dom";

// Описываем базовый роутинг приложения

function Router() {
    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>

    )
}

export default Router