import { Buildings, List, Pencil } from "phosphor-react"
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
	useDisclosure,
} from "@chakra-ui/react"
import useWindowDimensions from "./useWindowDimensions"

function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { width } = useWindowDimensions()

	
	return (
		<>
			<List
				size={32}
				className={width > 400 ? "absolute left-4 top-3 cursor-pointer" : "hidden"}
				onClick={onOpen}
			/>
			<div className={width > 400 ? "hidden" : "flex flex-col gap-4 items-center"}>
				<div className="bg-[#1ECCB8] h-[0.3rem] rounded-lg w-[30vw]" />
				<div className="bg-[#1ECCB8] rounded-t-3xl h-[8vh] w-screen" onClick={onOpen}>
					<div className="flex justify-between mx-20 h-full items-center">
						<div className="flex gap-3 items-center">
							<Buildings size={32} />
							<p className="font-baloo-2 font-semibold">CCT</p>
						</div>
						<div className="flex gap-3 items-center">
							<Pencil size={32} className="-rotate-45" />
							<p className="font-baloo-2 font-semibold">Sala 203</p>
						</div>
					</div>
				</div>
			</div>
			<Drawer
				onClose={onClose}
				isOpen={isOpen}
				size={width > 400 ? "sm" : "xl"}
				placement={width > 400 ? "left" : "bottom"}
			>
				<DrawerOverlay />
				<DrawerContent className={width > 400 ? "h-screen" : "h-[85vh]"}>
					<DrawerCloseButton />
					<DrawerBody className="bg-[#1ECCB8] flex items-center flex-col">
						{width < 400 && (
							<div className="h-1 rounded-xl w-[40%] bg-white mt-2"></div>
						)}
						<div className="flex gap-16 flex-col mt-20">
							<div className="w-[320px] h-[150px] bg-[url('/public/purplebox.png')] rounded-xl py-5 px-4 flex flex-col justify-between text-lg font-baloo-2 text-white font-bold">
								<div className="flex gap-2">
									<img src="/hat.png" alt="chapéu" className="w-8 h-8" />
									<p>Matéria</p>
								</div>
								<div>
									<p>Robótica computacional</p>
									<p>Professor Alberto</p>
								</div>
							</div>
							<div className="w-[320px] h-[150px] bg-[url('/public/pinkbox.png')] rounded-xl py-5 px-4 flex flex-col justify-between text-lg font-baloo-2 text-white font-bold">
								<div className="flex gap-2">
									<img src="/chair.png" alt="cadeira" className="w-8 h-8" />
									<p>Sala</p>
								</div>
								<div>
									<p>Sala 203 - Segundo Andar</p>
									<p>Prédio CCT</p>
								</div>
							</div>
						</div>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default NavBar
