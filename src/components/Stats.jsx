const stars = [
    {
        title: "Total Friends",
        count: 10
    },
    {
        title: "On Track",
        count: 3
    },
    {
        title: "Need Attention",
        count: 6
    },
    {
        title: "Interactions This Month",
        count: 12
    }
]
const Stats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="p-6 text-center border border-slate-800 rounded-xl transition-colors hover:border-slate-700"
                >
                    <p className="text-3xl font-bold text-white tracking-tight">
                        {star.count}
                    </p>
                    <h2 className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wider">
                        {star.title}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default Stats;