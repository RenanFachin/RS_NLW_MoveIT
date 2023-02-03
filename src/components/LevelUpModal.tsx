import { useChallenges } from '@/hooks/useChallenges';
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai'

export function LevelUpModal() {
    const { level, isLevelUpModalOpen, closeModal } = useChallenges()

    return (
        <Dialog.Root open={isLevelUpModalOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 animate-overlayModal bg-zinc-800 opacity-60' />

                <Dialog.Content className='bg-white rounded-md w-full max-w-md py-8 px-12 shadow-lg text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

                    <div>
                        <header className='text-9xl font-semibold text-blue-500 bg-levelUp bg-no-repeat bg-center bg-contain'>
                            {level}
                        </header>

                        <strong className='text-text-title text-4xl'>
                            Parabéns
                        </strong>

                        <p className='text-text-500 text-xl mt-1'>
                            Você alcançou um novo level.
                        </p>

                        <Dialog.Close>
                            <button type='button' onClick={closeModal} className="absolute top-3 right-3">
                                <AiOutlineClose size={24} />
                            </button>
                        </Dialog.Close>

                    </div>

                </Dialog.Content>

            </Dialog.Portal>

        </Dialog.Root>
    )
}

