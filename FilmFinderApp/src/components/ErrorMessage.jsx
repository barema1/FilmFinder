import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div className="text-center py-10 px-4">
            <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-6 py-4 rounded-xl inline-block max-w-lg">
                <h3 className="font-bold text-lg mb-1">Oops! Something went wrong</h3>
                <p className="text-sm opacity-90">{message}</p>
            </div>
        </div>
    );
};

export default ErrorMessage;
