const config = {
	api_key: "O6fmOIPtrvDlqoDe2_6UbKJc",
	environmental_solutions: {
		endpoint: "https://api.trade.gov/v1/environmental_solutions/search.json?",
		filter_types: ['provider', 'environmental issue', 'epa regulation', 'solution'],
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
		],
		low_level_type: 'solution',
		low_level_id_field: 'solution_id'
	},
	oil_and_gas: {
		endpoint: "https://api.trade.gov/v1/oil_and_gas/search.json?",
		filter_types: ['provider', 'equipment/service category', 'project phase', 'equipment/service'],
		filter_fields: [
			{
				label: 'Provider',
				name: 'provider'
			},
			{
				label: 'Equipment/Service Category',
				name: 'category'
			},
						{
				label: 'Project Phase',
				name: 'phase'
			},
			{
				label: 'Equipment/Service',
				name: 'equipment'
			},
		],
		low_level_type: 'equipment/service',
		low_level_id_field: 'equipment_id'
	},
}

export default config