"use client"

import { InteractionContext } from "@/context/InteractionContext";
import { MessageSquare, Phone, Video } from "lucide-react";
import { use } from "react";
import toast, { Toaster } from 'react-hot-toast';

const QuickCheck = ({ friend }) => {
    const { addInteraction } = use(InteractionContext)
    const handleQuickCheck = (type, name,) => {
        const date = new Date().toISOString().split("T")[0]
        addInteraction({ type, name, date })
        toast(`${type} with ${name} added to timeline`)
    }

    return (
        <div className="space-y-3 m-5 mt-10">
            <h2 className="text-sm font-semibold text-gray-300">Quick Check-In</h2>
            <div className="flex items-center gap-3">
                <button onClick={() => { handleQuickCheck("call", friend.name) }} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-200 bg-gray-800/80 hover:bg-gray-750 border border-gray-700/80 rounded-xl transition-all active:scale-[0.98]">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call</span>
                </button>

                <button onClick={() => { handleQuickCheck("text", friend.name) }} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-200 bg-gray-800/80 hover:bg-gray-750 border border-gray-700/80 rounded-xl transition-all active:scale-[0.98]">
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <span>Text</span>
                </button>

                <button onClick={() => { handleQuickCheck("video", friend.name) }} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-200 bg-gray-800/80 hover:bg-gray-750 border border-gray-700/80 rounded-xl transition-all active:scale-[0.98]">
                    <Video className="w-4 h-4 text-amber-400" />
                    <span>Video</span>
                </button>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 1000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>

    );
};

export default QuickCheck;