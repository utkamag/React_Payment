import Payment from "./Payment";
import App from "./App";
import {Routes, Route} from "react-router-dom";
import Notpassed from "./Notpassed";
import Passed from "./Passed";


// Описываем базовый роутинг приложения

function Router() {
    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/notpassed" element={<Notpassed/>}/>
            <Route path="/passed" element={<Passed/>}/>
        </Routes>

    )
}

export default Router