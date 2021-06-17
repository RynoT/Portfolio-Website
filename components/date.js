
import { parseISO, format } from 'date-fns'

export default function Date({ start, end }) {
	return (
		<>
			<span>
				{ typeof start === "undefined" ? ('Present') : (
					<time dateTime={start}>{ format(parseISO(start), 'LLL yyyy') }</time>
				)}
			</span>
			<span>{' - '}</span>
			<span>
				{ typeof end === "undefined" ? ('Present') : (
					<time dateTime={end}>{ format(parseISO(end), 'LLL yyyy') }</time>
				)}
			</span>
		</>
	)
}
