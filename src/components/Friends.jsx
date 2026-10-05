import Image from "next/image";

const Friends = async () => {
    const res = await fetch("http://localhost:3000/data/friends.json");
    const friends = await res.json();

    return (
        <div className="max-w-6xl mx-auto my-8 px-4">
            {/* Header */}
            <h3 className="text-xl font-bold text-white mb-6">
                Your Friends: <span className="text-indigo-400">{friends.length}</span>
            </h3>

            {/* Friends Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {friends.map((friend) => (
                    <div
                        key={friend.id}
                        className="flex flex-col items-center p-5 rounded-2xl border border-slate-800 transition-colors hover:border-slate-700 text-center"
                    >
                        {/* Avatar Container with fixed aspect ratio */}
                        <div className="relative w-20 h-20 overflow-hidden rounded-full border border-slate-700/60 shadow-md">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Friend Details */}
                        <div className="mt-4 flex flex-col items-center">
                            <h2 className="text-base font-semibold text-white tracking-tight">
                                {friend.name}
                            </h2>

                            <p className="mt-1 text-sm text-slate-400 font-medium">
                                {friend.days_since_contact} days ago
                            </p>

                            {/* Status Badge */}
                            <span
                                className={`mt-3 inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border capitalize ${friend.status === "on-track"
                                        ? "bg-emerald-950/60 text-emerald-400 border-emerald-800/50"
                                        : "bg-rose-950/60 text-rose-400 border-rose-800/50"
                                    }`}
                            >
                                {friend.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;