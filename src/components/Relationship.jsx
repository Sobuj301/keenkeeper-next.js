
const Relationship = () => {
    return (
        <div className="flex items-center justify-between m-5 p-5 mt-10 rounded-2xl border border-slate-700">
            <div className="space-y-1">
                <h2 className="text-sm font-semibold text-gray-200">
                    Relationship Goal
                </h2>
                <p className="text-sm text-gray-400">
                    Connect every 30 days
                </p>
            </div>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-all active:scale-95">
                Edit
            </button>
        </div>
    );
};

export default Relationship;