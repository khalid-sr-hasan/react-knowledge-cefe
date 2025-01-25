import React, { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    console.log(blogs);

    return <div className="mt-5">Blogs</div>;
};

export default Blogs;
