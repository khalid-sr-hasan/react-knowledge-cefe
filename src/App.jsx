import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import { BookMark } from "./components/BookMark/BookMark";

function App() {
    return (
        <>
            <div className="container mx-auto">
                <Header />
                <div className="my-5 gap-5 md:flex">
                    <Blogs />
                    <BookMark />
                </div>
            </div>
        </>
    );
}

export default App;
