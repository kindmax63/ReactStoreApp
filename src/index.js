import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import createStore from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {CartPage} from "./pages/cart/cart-page";
import {OrderPage} from "./pages/order/order-page";

import 'semantic-ui-css/semantic.min.css'
import './style.css';

/*
* author Maxim Filippov
* t.me/kindmax_tech
* */

const store = createStore();

ReactDOM.render(<Provider store = {store}>
    <BrowserRouter>
    `   <Routes>
        <Route exact path="/" element={<App/>}>
        </Route>
        <Route exact path="/cart" element={<CartPage/>}>
            </Route>
        <Route exact path="/order" element={<OrderPage/>}>
        </Route>
        </Routes>
    </BrowserRouter>,
</Provider> , document.getElementById('root'));



