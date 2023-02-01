export function CountDown() {
    return (
        <>
            <div className="flex items-center font-Rajdhani font-semibold text-text-title">
                <div
                    className="flex-1 flex items-center justify-evenly bg-white shadow-custom rounded-md text-9xl text-center"
                >
                    <span className="flex-1 border-r border-r-[#f0f1f3]">2</span>
                    <span className="flex-1 border-l border-l-[#f0f1f3]">5</span>
                </div>

                <span className="text-8xl mx-2">:</span>

                <div
                    className="flex-1 flex items-center justify-evenly bg-white shadow-custom rounded-md text-9xl text-center"
                >
                    <span className="flex-1 border-r border-r-[#f0f1f3]">0</span>
                    <span className="flex-1 border-l border-l-[#f0f1f3]">0</span>
                </div>
            </div>


            <button
                type="button"
                className="w-full h-20 mt-8 flex items-center justify-center rounded-md bg-blue-500 text-white text-xl font-semibold hover:bg-blue-600 transition-colors"
            >
                Iniciar um ciclo
            </button>
        </>
    )
}