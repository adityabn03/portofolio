// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Privy Intern Score Card',
		category: 'Web Application',
		img: require('@/assets/images/intern-score-card-landing.png'),
	},
	{
		id: 2,
		title: 'Privy Attendance Page',
		category: 'Web Application',
		img: require('@/assets/images/attendance-checkin-tab.png'),
	},
];

export default projects;
