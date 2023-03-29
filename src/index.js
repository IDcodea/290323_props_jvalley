import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyButton from "./components/MyButton";
import ProductCard from "./components/ProductCard";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <div>
        <h1>Hello App</h1>
        <ProductCard name={"SEPATU TERKINI"} price={"150.000"} image={'https://cf.shopee.co.id/file/4ffc521e651c7088127a958aad8a8436'} />
        <ProductCard name={"SEPATU TERKINI MURAH"} price={"150.000"} image={'https://cf.shopee.co.id/file/4ffc521e651c7088127a958aad8a8436'} />

        <MyButton content={"Login"} bgColor={"red"} color={"white"} onClick={() => {
            console.info("login Berhasil")
        }} />
        <MyButton content={"Register"} bgColor={"blue"} color={"white"} onClick={() => {
            console.info("Regster Berhasil")
        }} />
        <MyButton content={"Cihuy WIBU"} bgColor={"green"} color={"white"} onClick={() => {
            console.info("Dasar WIbu Berhasil")
        }} />
    </div>
)