"use client"
import Info from "@/containers/info"
import s from "./page.module.sass"
import Issue from "@/containers/issue"
import issues from "../constants/issues.json"
import { useState } from "react"

export default function Page() {
	const [color, setColor] = useState("#E30512")

	function changeColor(index: number) {
		setColor(issues[index].color)
	}

	return (
		<div className={s.home} style={{ background: `${color}` }}>
			<Info />
			<Issue
				currPosition={(idx: number) => {
					changeColor(idx)
				}}
			/>
		</div>
	)
}
