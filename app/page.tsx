"use client"
import Info from "@/containers/info"
import s from "./page.module.sass"
import Issue from "@/containers/issue"
import issues from "../constants/issues.json"
import { useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"

export default function Page() {
	const controls = useAnimationControls()
	// const [color, setColor] = useState("#E30512")
	const [index, setIndex] = useState(0)

	function changeColor(index: number) {
		setIndex(index)
	}

	useEffect(() => {
		controls.start({
			backgroundColor: `${issues[index].color}`,
			transition: { duration: 1.2 },
		})
	}, [index])

	return (
		<motion.div className={s.home} animate={controls}>
			<Info currIndex={index} />
			<Issue
				currPosition={(idx: number) => {
					changeColor(idx)
				}}
			/>
		</motion.div>
	)
}
