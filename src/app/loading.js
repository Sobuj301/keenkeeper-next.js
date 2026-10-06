
const Loading = ({ message = 'Loading...' }) => {
    return (
        <div 
            className="flex flex-col items-center justify-center h-screen  space-y-4" 
            role="status" 
            aria-live="polite"
        >
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-medium text-gray-600">{message}</span>
        </div>
    );
};

export default Loading;