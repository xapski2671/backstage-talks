import s from "./info.module.sass"

export default function Info() {
	return (
		<div className={s.info}>
			<div className={s.about}>
				<img src="/logopngik_back.png" alt="logo" />
				<div className={s.details}>
					<p>
						Backstage Talks is a magazine of casual, but in depth dialogues on
						design and business. Our decisions shape and influence this complex
						world—to have a chance to make the right ones, we need to talk.{" "}
					</p>
					<p className={s.copyright}>
						© 2023 <a href="#">Published by Büro Milk</a>
					</p>
					<a href="#">Privacy Policy</a>
				</div>
			</div>

			<div className={s.issues}>
				<p className={s.email}>info@backstagetalks.com</p>
				<div className={s.issues_box}>
					<p>Issue #7</p>
					<p>Issue #6</p>
					<p>Issue #5</p>
					<p>Issue #4</p>
					<p>Issue #3</p>
					<p>Issue #2</p>
					<p>Issue #1</p>
				</div>
			</div>
		</div>
	)
}
