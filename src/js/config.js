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
		low_level_id_field: 'solution_id',
		heading: 'U.S. Environmental Solutions Toolkit Search',
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
		low_level_id_field: 'equipment_id',
		heading: 'Oil & Gas Toolkit Search'
	},
	renewable_energy: {
		endpoint: "https://api.trade.gov/v1/renewable_energy/search.json?",
		filter_types: ['provider', 'sector', 'project type', 'offering', 'equipment/service type', 'specific equipment/service'],
		filter_fields: [
			{
				label: 'Provider',
				name: 'provider'
			},
			{
				label: 'Sector',
				name: 'sector'
			},
			{
				label: 'Project Type',
				name: 'project_type'
			},
			{
				label: 'Offering',
				name: 'offering'
			},
			{
				label: 'Equipment/Service Type',
				name: 'equipment_type'
			},
			{
				label: 'Specific Equipmet/Service',
				name: 'equipment'
			}
		],
		low_level_type: 'specific equipment/service',
		low_level_id_field: 'equipment_id',
		heading: 'Renewable Energy Toolkit Search' 
	},
	next_gen: {
		endpoint: "https://api.trade.gov/v1/next_gen/search.json?",
		filter_types: ['provider', 'performance improvement area', 'capability', 'solution'],
		filter_fields: [
			{
				label: 'Provider',
				name: 'provider'
			},
			{
				label: 'Performance Improvement Area',
				name: 'improvement_area'
			},
			{
				label: 'Capability',
				name: 'capability'
			},
			{
				label: 'Solution',
				name: 'solution'
			}
		],
		low_level_type: 'solution',
		low_level_id_field: 'solution_id',
		heading: 'NextGen Toolkit Search'
	},
	smart_grid: {
		endpoint: "https://api.trade.gov/v1/smart_grid/search.json?",
		filter_types: ['provider', 'sub-sector', 'category', 'product type'],
		filter_fields: [
			{
				label: 'Provider',
				name: 'provider'
			},
			{
				label: 'Sub-Sector',
				name: 'sub_sector'
			},
			{
				label: 'Category',
				name: 'category'
			},
			{
				label: 'Product Type',
				name: 'product_type'
			}
		],
		low_level_type: 'product_type',
		low_level_id_field: 'product_type_id',
		heading: 'SmartGrid Toolkit Search'
	},
	civil_nuclear: {
		endpoint: "https://api.trade.gov/v1/civil_nuclear/search.json?",
		filter_types: ['provider', 'sector', 'sub-sector', 'product'],
		filter_fields: [
			{
				label: 'Provider',
				name: 'provider'
			},
			{
				label: 'Sector',
				name: 'sector'
			},
			{
				label: 'Sub-Sector',
				name: 'sub_sector'
			},
			{
				label: 'Product',
				name: 'product'
			}
		],
		low_level_type: 'product',
		low_level_id_field: 'product_id',
		heading: 'Civil Nuclear Toolkit Search'
	}
}

export default config