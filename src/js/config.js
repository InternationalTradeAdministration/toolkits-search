const config = {
	api_key: "O6fmOIPtrvDlqoDe2_6UbKJc",
	environmental_solutions: {
		endpoint: "https://api.trade.gov/v1/environmental_solutions/search.json?",
		filter_types: ['provider', 'solution', 'environmental issue', 'epa regulation'],
		filter_fields: [
			{
				label: 'Provider',
				name: 'provider'
			},
			{
				label: 'Environmental Issue',
				name: 'issue'
			},
						{
				label: 'EPA Regulation',
				name: 'regulation'
			},
			{
				label: 'Solution',
				name: 'solution'
			},
		]
	}
}

export default config