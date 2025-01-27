import PropTypes from "prop-types";

const BookMark = ({ readTime, bookMark }) => {
    return (
        <div className="md:w-1/3">
            <div className="sticky top-24">
                <div className="text-center py-5 px-12 bg-[#EFEDFD] border-[#6047EC] border-2 rounded-md">
                    <h2 className="text-lg md:text-2xl font-bold text-[#6047EC]">
                        Spent time on read : {readTime} min
                    </h2>
                </div>

                <div className="mt-5 rounded-lg bg-[#F3F3F3] p-7">
                    <h3 className="text-lg md:text-2xl font-bold">
                        Bookmarked Blogs : {bookMark.length}
                    </h3>

                    {bookMark.map((bookM, idx) => (
                        <div key={idx} className="bg-white mt-5 p-5 rounded-md">
                            <p className="font-bold md:text-lg">
                                {bookM.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

BookMark.propTypes = {
    readTime: PropTypes.number.isRequired,
    bookMark: PropTypes.array.isRequired,
};

export default BookMark;
