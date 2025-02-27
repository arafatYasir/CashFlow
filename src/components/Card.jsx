const Card = ({children, className}) => {
    return (
        <div className={`bg-gray-900 text-white shadow-lg rounded-2xl p-4 border transition-all duration-300 hover:bg-opacity-80 hover:backdrop-blur-xl hover:shadow-2xl ${className}`}>
        {children}
    </div>
    );
};

export default Card;