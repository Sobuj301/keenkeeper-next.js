import React from 'react';

const Banner = () => {
    return (
        <div className="mx-auto my-12 max-w-2xl px-4 text-center">
            {/* Subtitle / Badge */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest">
                KeenKeeper
            </span>

            {/* Main Heading */}
            <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Friends to keep close in your life
            </h3>

            {/* Description */}
            <p className="mt-3 text-base sm:text-lg">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.
            </p>

            {/* Action Button */}
            <div className="mt-6">
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 active:scale-95"
                >
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Add a Friend
                </button>
            </div>
        </div>
    );
};

export default Banner;