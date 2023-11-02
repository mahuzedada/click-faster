import { useState, useEffect } from "react";

function App() {
    const [time, setTime] = useState(3);
    const [clicks, setClicks] = useState(0);

    function handleClick() {
        setClicks((current) => current + 1);
    }

    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }, [time]);

    return (
        <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Click Faster
            </h1>
            <p className="mb-8 text-lg text-gray-700 max-w-md">
                Try to click the button as many times as you can before the timer reaches zero. Ready, set, go!
            </p>
            <div className="text-4xl font-semibold mb-2">{time}</div>
            <div className="text-3xl mb-8">Clicks: {clicks}</div>
            <button
                disabled={time <= 0}
                onClick={handleClick}
                className="disabled:opacity-50 text-white font-bold py-2 px-4 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring transition ease-in duration-200 text-lg"
            >
                Click me
            </button>
        </div>
    );
}

export default App
