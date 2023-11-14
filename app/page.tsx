import Info from "@/containers/info"
import s from "./page.module.sass"

export default function page() {
	return (
		<div className={s.home}>
			<Info />
		</div>
	)
}
