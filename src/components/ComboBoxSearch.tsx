import { Fragment, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { Check, PaperPlaneRight } from "phosphor-react"

interface ComboBoxSearchProps {
	infos: {
		name: string
		id: number
	}[]
}

export default function ComboBoxSearch({ infos }: ComboBoxSearchProps) {
	const [selected, setSelected] = useState(infos[0])
	const [query, setQuery] = useState("")

	const filtered =
		query === ""
			? []
			: infos.filter((person) =>
					person.name
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  ).slice(0,4)

	return (
		<div className="w-full">
			<Combobox value={selected} onChange={setSelected}>
				<div className="w-full">
					<div className="flex justify-between bg-white w-full rounded-xl p-2">
						<Combobox.Input
							className="w-full border-none text-gray-900 outline-none rounded-xl"
							displayValue={(person: any) => person.name}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<PaperPlaneRight
							size={32}
							weight="fill"
							className="text-blue-500 mr-2 cursor-pointer"
						/>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className={ query === "" ? "hidden" : "relative mt-1 w-full rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm overflow-hidden"}>
							{filtered.length === 0 && query !== "" ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								filtered.map((person) => (
									<Combobox.Option
										key={person.id}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? "bg-teal-600 text-white" : "text-gray-900"
											}`
										}
										value={person}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ml-2 ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{person.name}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active ? "text-white" : "text-teal-600"
														}`}
													>
														<Check size={28} weight="fill" />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	)
}
