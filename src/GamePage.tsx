// src/GamePage.tsx
import React from 'react';

const GamePage: React.FC = () => {
    const handleStartGame = () => {
        console.log('Game started!');
    };

    const handleEndGame = () => {
        console.log('Game ended!');
    };

    return (
        <div className=" h-screen
        container mx-auto mt-8 mb-20">
            <h1 className="text-2xl font-bold mb-4">环境信息</h1>
            <div>URL</div>
            {/* Your environment information goes here */}

            <div className="flex flex-col ">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    onClick={handleStartGame}
                >
                    开始游戏
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                    onClick={handleEndGame}
                >
                    结束游戏
                </button>
            </div>
        </div>
    );
};

export default GamePage;
