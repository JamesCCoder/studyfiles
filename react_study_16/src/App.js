import React from "react";
import "./App.css";

import {Route, Routes, BrowserRouter} from "react-router-dom";

import Main from "./components/Main";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Help from "./components/Help";
import About from "./components/About";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import HelpOld from "./components/Help_old";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                        element={<Main/>}/>
                    <Route path="/main"
                        element={<Main/>}/>
                    <Route path="/home"
                        element={<Main/>}/>
                    <Route path="/cart"
                        element={<Cart/>}/>
                    <Route path="/product"
                        element={<Product/>}/>
                    <Route path="/product/:productId"
                        element={<ProductDetail/>}/>
                    <Route path="/help">
                        <Route index={true}
                            element={<Help/>}/>
                        <Route index={false}
                            path="new"
                            element={
                                <p>Hi, new user!</p>
                            }/>
                        <Route index={false}
                            path="old"
                            element={<HelpOld/>}/>
                    </Route>
                    <Route path="/about"
                        element={<About/>}/>
                    <Route path="*"
                        element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App;
