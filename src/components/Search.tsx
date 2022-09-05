import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

import "react-datalist-input/dist/styles.css"
import ComboBoxSearch from "./ComboBoxSearch"

interface SearchProps {
	closeModal: () => void
	isOpen: boolean
}

const people = [
	{ id: 1, name: 'Ciência da Computação - 2° Período A'},
	{ id: 2, name: 'Biomedicina - 4° Período B' },
	{ id: 3, name: 'Direito - 8° Período A' },
	{ id: 4, name: 'Medicina - 5° Período A' },
	{ id: 5, name: 'Psicologia - 2° Período C' },
	{ id: 6, name: 'Engenharia - 1° Período A' },
	{ id: 7, name: 'Nutrição - 3° Período B' },
	{ id: 8, name: 'Odontologia - 7° Período C' }
  ]

function Search({ closeModal, isOpen }: SearchProps) {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex justify-center p-4 text-center absolute top-[20vh] w-full">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-transparent text-left align-middle transition-all flex">
									<div className="flex justify-between items-center w-full p-2 overflow-hidden">
										<ComboBoxSearch infos={people}/>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default Search
