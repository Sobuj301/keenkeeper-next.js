
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-auto border-t border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-3">
                {/* Project Name */}
                <h2 className="text-2xl font-bold text-white tracking-wide">
                    KeenKeeper
                </h2>

                {/* Short Description */}
                <p className="text-sm text-gray-400 max-w-md">
                    KeenKeeper helps you organize, track, and manage your daily priorities with ease and efficiency.
                </p>

                {/* Copyright Text */}
                <p className="text-xs text-gray-500 mt-2">
                    &copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;