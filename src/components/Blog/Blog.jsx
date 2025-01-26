import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleReadTime, handleAddBookMark }) => {
    const [toggleBookMark, setToggleBookMark] = useState(false);

    const {
        author,
        id,
        reading_time,
        hashtags,
        title,
        author_img,
        posted_date,
        cover,
    } = blog;

    const handleBookMark = () => {
        setToggleBookMark(true);
        handleAddBookMark(blog);
    };

    return (
        <div className="">
            <img
                className="w-full rounded-lg"
                src={cover}
                alt={`cover image of the title ${cover}`}
            />

            <div className="py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img className="w-14" src={author_img} alt="" />
                        <div>
                            <h5 className="font-bold">{author}</h5>
                            <p className="text-xs">{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <p className="flex items-center gap-2 text-[#8b8585]">
                            {reading_time} min read
                            <FaRegBookmark
                                className={`${
                                    toggleBookMark && "text-red-500"
                                } cursor-pointer`}
                                onClick={handleBookMark}
                            />
                        </p>
                    </div>
                </div>

                <h3 className="my-3 text-2xl lg:text-4xl font-bold">{title}</h3>

                <div className="flex gap-3 text-[#8b8585]">
                    {hashtags.map((h, idx) => (
                        <span key={idx}>#{h}</span>
                    ))}
                </div>
                <button
                    onClick={() => handleReadTime(reading_time)}
                    className="my-3 font-semibold underline text-[#6047EC] hover:text-[#6e65a1] cursor-pointer"
                >
                    Mark as read
                </button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleReadTime: PropTypes.func.isRequired,
    handleAddBookMark: PropTypes.func.isRequired,
};
export default Blog;
