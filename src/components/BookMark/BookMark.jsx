export const BookMark = () => {
    return (
        <div className="md:w-1/3">
            <div className="sticky top-24">
                <div className="text-center py-5 px-12 bg-[#EFEDFD] border-[#6047EC] border-2 rounded-md">
                    <h2 className="text-lg md:text-2xl font-bold text-[#6047EC]">
                        Spent time on read : 177 min
                    </h2>
                </div>

                <div className="mt-5 rounded-lg bg-[#F3F3F3] p-7">
                    <h3 className="text-lg md:text-2xl font-bold">
                        Bookmarked Blogs : 8
                    </h3>

                    <div className="bg-white mt-5 p-5 rounded-md">
                        <p className="font-bold md:text-lg">
                            Master Microsoft Power Platform and Become an
                            In-Demand!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
