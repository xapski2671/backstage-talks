import Info from "@/containers/info"
import s from "./page.module.sass"
import Issue from "@/containers/issue"

export default function page() {
	return (
		<div className={s.home}>
			<Info />
			<Issue />
		</div>
	)
}
