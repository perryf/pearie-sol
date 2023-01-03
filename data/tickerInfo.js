import { format, isValid, parse } from 'date-fns'
import showList from '../data/showList'
import { determineUpcoming } from '../constants'

const formatTicker = (show = {}) => {
	const parsedDate = parse(show.date, 'yyyy-MM-dd', new Date())
	const dateDisplay = isValid(parsedDate)
		? `${format(parsedDate, 'M/dd')} `
		: ''
	const locationDisplay = show.location !== 'DC' ? `, ${show.location}` : ''
	const otherActsDisplay = show.otherActs
		? show.otherActs.replace(',', ' &')
		: ''

	return `🚨🚨 Upcoming Show: ${dateDisplay} ${show.venue} ${locationDisplay} (w/ ${otherActsDisplay})! 🚨🚨`
}

// TODO -> refactor to not have to create a whole array of upcoming shows, just find nearest upcoming show
// TODO -> don't display show if very far out (like over 3 months or something)
let upcomingShows = []

// showList is assumed to be in descending order by date
showList.forEach(show => {
	const isUpcoming = determineUpcoming(show)

	if (isUpcoming) upcomingShows.push(show)
})

const nearestShow = upcomingShows[upcomingShows.length - 1]

/* 
  // * For the ticker to work best, make sure your string is not too short and not too long.  See examples below
*/
let upcomingShowsStr = ''

if (nearestShow) upcomingShowsStr = formatTicker(nearestShow)

const tickerStr = upcomingShowsStr

export { tickerStr }

// const happinessStr = 'New album REAL HAPPINESS out June 18th on HHBTM Records!'
//  upcomingShowsStr =
// 	'4/20 @ the Runaway with Josephine Network & Shawnis and the Shimmers'
//  upcomingShowsStr =
// 	'🚨🚨 Upcoming Show: 5/14 at Comet Ping Pong (w/ Evolfo)! 🚨🚨'
//  upcomingShowsStr =
// 	'🚨🚨 Upcoming Show: 10/29 Rhizome (w/ Past Pawn & Kilynn Lunsford)! 🚨🚨'
// upcomingShowsStr =
// 	'🚨🚨 Upcoming Show: 1/13 DC 9 (w/ Bed Maker & Blood Family Reunion)! 🚨🚨'
