import { compareAsc, parse, subDays } from 'date-fns'

// determine if the show (object) is upcoming or in the past
// return true if upcoming, false if in the past
export const determineUpcoming = (show = {}) => {
	// since parsed date is at midnight, better to use yesterday instead of today for comparison
	const parsedDate = parse(show.date, 'yyyy-MM-dd', new Date())
	const yesterday = subDays(new Date(), 1)

	return compareAsc(parsedDate, yesterday) >= 0
}
