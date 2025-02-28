import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    return (
        <div className="bg-[#16A34A] py-4">
            <div className="container mx-auto px-5 md:px-0 flex items-center justify-between">
                <h2 className="text-3xl font-medium">CashFlow</h2>
                <div>
                    {
                        user && <div className="flex items-center gap-5">
                            <p className="text-lg font-semibold">{user.displayName}</p>
                            <button onClick={signOutUser} className="text-lg bg-[#EF4444] text-black px-4 py-1 rounded-full hover:bg-[#f0202c] transition cursor-pointer">Log Out</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;