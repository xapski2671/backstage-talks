"use client"
import s from "./issue.module.sass"
import issues from "../../constants/issues.json"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Issue({ currPosition }: { currPosition: Function }) {
	const [position, setPosition] = useState(0)
	const [callable, setCallable] = useState(true)

	function changeIssue(e: any) {
		if (e.deltaY < 0) {
			setPosition((prev) => (prev < 6 ? prev + 1 : 6))
		} else {
			setPosition((prev) => (prev > 0 ? prev - 1 : 0))
		}
	}

	function trigger(e: any) {
		if (callable) {
			changeIssue(e)
		}
	}

	useEffect(() => {
		setCallable(false)
		!(position < 0) && !(position > 6) && currPosition(position)
	}, [position])

	return (
		<AnimatePresence mode="popLayout">
			<motion.div
				className={s.issue}
				key={position}
				initial={{ y: 500, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -200, opacity: 0 }}
				transition={{ duration: 1 }}
				onAnimationComplete={() => {
					setCallable(true)
				}}
				onWheel={(e) => {
					callable && trigger(e)
				}}
			>
				<img
					src={issues[!(position < 0) && !(position > 6) ? position : 0].src}
					alt="issue"
					className={s.issue_img}
				/>
				<p className={s.issue_no}>{`Issue #${position + 1}`}</p>
				<p
					className={s.buy_info}
					style={position == 5 ? { color: "black" } : {}}
				>
					{"BUY HERE"}
				</p>
				<p className={s.store_info}>{"or in selected stores"}</p>
			</motion.div>
		</AnimatePresence>
	)
}
