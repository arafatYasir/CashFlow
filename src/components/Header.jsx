import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="bg-[#16A34A] py-4">
            <div className="container mx-auto flex items-center justify-between">
                <h2 className="text-3xl font-medium">CashFlow</h2>
                <div>
                    {
                        user && <button>Log Out</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;