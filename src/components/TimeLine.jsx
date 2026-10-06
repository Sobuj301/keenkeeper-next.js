import React from 'react';
import { MessageSquare, Phone, Video } from "lucide-react";


const TimeLine = ({filteredInteractions}) => {
    return (
         <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-800">
                {filteredInteractions.map((interaction, index) => {
                    const Icon = interaction.type === "call" ? Phone : interaction.type === "text" ? MessageSquare : Video;

                    return (
                        <div key={index} className="relative flex items-start gap-4 group">
                            {/* Icon Node on the Timeline line */}
                            <div className="absolute -left-6 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 border border-gray-800 group-hover:border-amber-500/50 transition-colors">
                                <Icon className="w-4 h-4 text-amber-400" />
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 ml-4 p-4 bg-gray-900/60 border border-gray-800/80 rounded-xl hover:bg-gray-800/50 hover:border-gray-700 transition-all">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-gray-200 capitalize">
                                        {interaction.type} with {interaction.name}
                                    </h3>
                                    <span className="text-xs font-medium text-gray-500">
                                        {interaction.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
    );
};

export default TimeLine;