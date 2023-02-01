export function ExperienceBar() {
    return (
        <header className="flex items-center">
            <span className="font-normal">
                0 xp
            </span>

            <div className="flex-1 h-1 rounded-md bg-text-300 mx-6 relative">

                <div
                    className="h-1 rounded-md bg-green-500"
                    // Esta estilização está inline por motivos de ser um valor que vai se alterar durante o uso da aplicação
                    style={{ width: '50%' }}
                />

                <span
                    className="absolute top-3 -translate-x-1/2"
                    // Esta estilização está inline por motivos de ser um valor que vai se alterar durante o uso da aplicação
                    style={{ left: '50%' }}
                >
                    300 xp
                </span>

            </div>

            <span className="font-normal">
                600 xp
            </span>
        </header>
    )
}