import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const { author, id, hashtags, title, author_img, posted_date, cover } =
        blog;
    return (
        <div>
            <img className="w-full rounded-lg" src={cover} alt="" />

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
                        <p>klhsd</p>
                    </div>
                </div>

                <h3>{title}</h3>

                <div className="flex gap-3">
                    {hashtags.map((h, idx) => (
                        <span key={idx}>#{h}</span>
                    ))}
                </div>
                <button>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};
export default Blog;
