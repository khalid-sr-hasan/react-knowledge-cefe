import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <div className="sticky top-0 left-0">
            <div className="flex items-center justify-between py-4">
                <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
                <img
                    src={profile}
                    alt="profile_img"
                    className="h-12 w-12 rounded-full"
                />
            </div>
            <hr />
        </div>
    );
};

export default Header;
