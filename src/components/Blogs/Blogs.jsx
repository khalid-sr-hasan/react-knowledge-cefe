import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleReadTime, handleAddBookMark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    // console.log(blogs);

    return (
        <div className="md:w-2/3 ">
            {blogs.map((blog) => (
                <Blog
                    handleReadTime={handleReadTime}
                    handleAddBookMark={handleAddBookMark}
                    key={blog.id}
                    blog={blog}
                />
            ))}
        </div>
    );
};

Blogs.propTypes = {
    handleReadTime: PropTypes.func.isRequired,
    handleAddBookMark: PropTypes.func.isRequired,
};
export default Blogs;
