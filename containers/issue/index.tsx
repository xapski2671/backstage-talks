import s from "./issue.module.sass"

export default function Issue() {
	return (
		<div className={s.issue}>
			<img src="/issue_1.png" alt="issue" />
			<p>{"Issue #5"}</p>
			<p>{"BUY HERE"}</p>
			<p>{"or in selected stores"}</p>
		</div>
	)
}
