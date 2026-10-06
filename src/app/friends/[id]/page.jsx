import friendsData from "@/../public/data/friends.json";
import QuickCheck from '@/components/QuickCheck';
import Relationship from '@/components/Relationship';
import Stats from '@/components/Stats';
import Image from 'next/image';
import React from 'react';


const stars = [
    {
        title: "Days Since Contact",
        count: 62
    },
    {
        title: "Goal (Days)",
        count: 32
    },
    {
        title: "Goal (Days)",
        count: 52
    },
    {
        title: "Feb 27, 2026",
        count: 65
    },

]

const FriendDetails = async ({ params }) => {
    const { id } = await params
    // const res = await fetch("/data/friends.json");
    // const friends = await res.json()
    const friend = friendsData.find(frd => frd.id === parseInt(id))
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Sidebar Section */}
                <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-5">
                    <div className="flex flex-col items-center p-5 rounded-2xl border border-slate-800 bg-slate-900/40 transition-colors hover:border-slate-700 text-center">
                        {/* Avatar Container with fixed aspect ratio */}
                        <div className="relative w-20 h-20 overflow-hidden rounded-full border border-slate-700/60 shadow-md">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                fill
                                sizes="80px"
                                className="object-cover"
                            />
                        </div>

                        {/* Friend Details */}
                        <div className="mt-4 flex flex-col items-center">
                            <h2 className="text-base font-semibold text-white tracking-tight">
                                {friend.name}
                            </h2>

                            {/* Status Badge */}
                            <span
                                className={`mt-3 inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border capitalize ${friend.status === "on-track"
                                    ? "bg-emerald-950/60 text-emerald-400 border-emerald-800/50"
                                    : "bg-rose-950/60 text-rose-400 border-rose-800/50"
                                    }`}
                            >
                                {friend.status}
                            </span>
                            <p className="mt-2 text-sm text-slate-400 font-medium">
                                {friend.bio}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-2">
                        <button className="w-full px-4 py-2.5 text-sm font-semibold text-amber-950 bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-[0.98] transition-all">
                            Snooze 2 weeks
                        </button>

                        <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-300 bg-gray-800/60 rounded-lg hover:bg-gray-800 hover:text-white active:scale-[0.98] transition-all">
                            Archive
                        </button>

                        <button className="w-full px-4 py-2.5 text-sm font-medium text-red-400 bg-red-500/10 rounded-lg hover:bg-red-500 hover:text-white active:scale-[0.98] transition-all">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6">
                    <Stats stars={stars} />
                    <Relationship />
                    <QuickCheck friend={friend} />
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;