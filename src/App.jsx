import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";

function App() {
    return (
        <>
            <div className="container mx-auto">
                {" "}
                <Header />
                <hr />
                <Blogs />
            </div>
        </>
    );
}

export default App;
