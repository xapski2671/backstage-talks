"use client"
import s from "./issue.module.sass"
import issues from "../../constants/issues.json"
import { useScroll } from "@/hooks/useScroll"
import { useEffect, useState } from "react"

export default function Issue({ currPosition }: { currPosition: Function }) {
	const { scrollDirection } = useScroll()
	const [position, setPosition] = useState(0)
	const [callable, setCallable] = useState(true)

	function changeIssue(e: any) {
		if (e.deltaY < 0 && !(position > 6)) {
			setPosition((prev) => prev + 1)
		} else {
			setPosition((prev) => prev - 1)
		}
	}

	function trigger(e: any) {
		if (callable) {
			changeIssue(e)
		}
	}

	useEffect(() => {
		setCallable(false)
		currPosition(position)
		const tID = setTimeout(() => {
			setCallable(true)
		}, 2000)

		return () => {
			clearTimeout(tID)
		}
	}, [position])

	return (
		<div
			className={s.issue}
			onWheel={(e) => {
				trigger(e)
			}}
		>
			<img
				src={issues[!(position < 0) && !(position > 6) ? position : 0].src}
				alt="issue"
				className={s.issue_img}
			/>
			<p className={s.issue_no}>{`Issue #${position + 1}`}</p>
			<p className={s.buy_info}>{"BUY HERE"}</p>
			<p className={s.store_info}>{"or in selected stores"}</p>
		</div>
	)
}
