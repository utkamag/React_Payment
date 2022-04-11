import Payment from "./Payment";
import App from "./App";
import {Routes, Route} from "react-router-dom";
import Notpassed from "./Notpassed";
import Passed from "./Passed";
import Error from "./Error";
import PaymentMegafon from "./PaymentMegafon";
import PaymentMTC from "./PaymentMTC";
import PaymentYota from "./PaymentYota";


// Описываем базовый роутинг приложения

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/paymentMegafon" element={<PaymentMegafon/>}/>
            <Route path="/paymentMTC" element={<PaymentMTC/>}/>
            <Route path="/paymentYota" element={<PaymentYota/>}/>
            <Route path="/notpassed" element={<Notpassed/>}/>
            <Route path="/passed" element={<Passed/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default Router