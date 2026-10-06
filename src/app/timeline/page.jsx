"use client";

import Filter from "@/components/Filter";
import NoInteractions from "@/components/NoInteractions";
import TimeLine from "@/components/TimeLine";
import useInteractions from "@/hooks/useInteractions";
import { useState } from "react";

const TimelinePage = () => {
    const [filter, setFilter] = useState("all");
    const { interactions } = useInteractions();

    const filteredInteractions = filter === "all"
        ? interactions
        : interactions.filter((item) => item.type === filter);

    return (
        <div className="p-6 max-w-2xl mx-auto space-y-6">
            <div className="flex justify-between">
                <h2 className="text-xl font-bold text-gray-100 tracking-tight">Timeline</h2>
                <Filter setFilter={setFilter} />
            </div>

            {filteredInteractions.length > 0 ? (
                <TimeLine filteredInteractions={filteredInteractions} />
            ) : (
                <NoInteractions />
            )}
        </div>
    );
};

export default TimelinePage;