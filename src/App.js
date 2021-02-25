import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RouterController from "./RouteController/RouterController";
import {Provider} from "react-redux";
import store from './Redux/store'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
    return <div>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <RouterController/>
                <Footer/>
            </BrowserRouter>
        </Provider>
    </div>
}

export default App;
