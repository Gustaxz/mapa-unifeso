import { MagnifyingGlass, MapPin } from "phosphor-react"
import { useState } from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Search from "./components/Search"

function App() {
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}
	return (
		<div className="w-screen h-screen bg-[#9DF561] bg-opacity-16 flex justify-between flex-col items-center">
			<div className="flex gap-2 items-center justify-center w-full py-3">
				<MapPin size={32} weight="fill" />
				<p className="text-xl font-confortaa font-semibold">Campus Sede</p>
				<MagnifyingGlass size={32} className="absolute right-4 rotate-90 cursor-pointer" onClick={openModal} />
				{ isOpen && (
					<Search closeModal={closeModal} isOpen={isOpen}/>
				) }
			</div>
      <NavBar />
		</div>
	)
}

export default App
