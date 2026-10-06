import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NoInteractions = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 m-4 text-center bg-gray-900/60 border border-gray-800 rounded-2xl max-w-md mx-auto">
            {/* Icon Container */}
            <div className="p-4 mb-4 rounded-full bg-gray-800/80 border border-gray-700/60 text-amber-400">
                <Clock className="w-8 h-8" />
            </div>

            {/* Headline & Description */}
            <h2 className="text-lg font-semibold text-gray-100">
                No interactions yet
            </h2>
            <p className="mt-1 text-sm text-gray-400 max-w-xs">
                Start a check-in with a friend to see your timeline.
            </p>

            {/* Back Home Link */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 mt-6 text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all active:scale-95"
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Back Home</span>
            </Link>
        </div>
    );
};

export default NoInteractions;