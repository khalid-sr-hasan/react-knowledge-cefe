import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import { useState } from "react";
import BookMark from "./components/BookMark/BookMark";

function App() {
    const [bookMark, setBookMark] = useState([]);
    const [readTime, setReadTime] = useState(0);

    const handleAddBookMark = (item) => {
        const existBookMark = bookMark.find((bookM) => bookM.id === item.id);

        if (existBookMark) {
            return alert("book already added");
        }

        const newBookMark = [...bookMark, item];
        setBookMark(newBookMark);
    };

    const handleReadTime = (readingTime, id) => {
        const totalTime = readTime + readingTime;
        setReadTime(totalTime);

        const bExist = bookMark.filter((book) => book.id !== id);
        setBookMark(bExist);

        console.log(id);
    };

    return (
        <>
            <div className="container mx-auto px-3 md:px-0">
                <Header />
                <div className="my-5 gap-5 md:flex">
                    <Blogs
                        handleAddBookMark={handleAddBookMark}
                        handleReadTime={handleReadTime}
                    />
                    <BookMark bookMark={bookMark} readTime={readTime} />
                </div>
            </div>
        </>
    );
}

export default App;
