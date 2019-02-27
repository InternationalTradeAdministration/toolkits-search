const config = {
    api_key: "O6fmOIPtrvDlqoDe2_6UbKJc",
    environmental_solutions: {
        endpoint: "https://api.trade.gov/v1/environmental_solutions/search.json?",
        filter_types: ["environmental issue", "epa regulation", "solution", "provider"],
        languages_enabled: true,
        filter_fields: [
            {
                label: "Environmental Issue",
                name: "issue"
            },
            {
                label: "EPA Regulation",
                name: "regulation"
            },
            {
                label: "Solution",
                name: "solution"
            },
            {
                label: "Provider",
                name: "provider"
            },
        ],
        low_level_type: "solution",
        low_level_id_field: "solution_id",
        heading: "U.S. Environmental Solutions Toolkit Search",
        description: "The U.S. Environmental Solutions Toolkit is a buyer's resource guide that marries EPA expertise on solving environmental challenges with a catalogue of U.S. providers of related technologies. The U.S. Environmental Solutions Toolkit fosters export opportunities for the U.S. environmental industry as well as fosters and advances environmental protection goals. U.S. environmental technology or services companies that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the U.S. Environmental Solutions industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA or U.S. EPA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA and U.S. EPA assume no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    environmental_solutions_ar: {
        endpoint: "https://api.trade.gov/v1/environmental_solutions_ar/search.json?",
        filter_types: ["قضية بيئية", "لائحة وكالة حماية البيئة", "حل", "provider"],
        languages_enabled: true,
        filter_fields: [
            {
                label: "قضية بيئية",
                name: "issue"
            },
            {
                label: "لائحة وكالة حماية البيئة",
                name: "regulation"
            },
            {
                label: "حل",
                name: "solution"
            },
            {
                label: "موفر الحلول الأمريكي",
                name: "provider"
            },
        ],
        low_level_type: "حل",
        low_level_id_field: "solution_id",
        heading: "U.S. Environmental Solutions Toolkit Search",
        description: "The U.S. Environmental Solutions Toolkit is a buyer's resource guide that marries EPA expertise on solving environmental challenges with a catalogue of U.S. providers of related technologies. The U.S. Environmental Solutions Toolkit fosters export opportunities for the U.S. environmental industry as well as fosters and advances environmental protection goals. U.S. environmental technology or services companies that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the U.S. Environmental Solutions industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA or U.S. EPA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA or U.S. EPA assume no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    environmental_solutions_zh: {
        endpoint: "https://api.trade.gov/v1/environmental_solutions_zh/search.json?",
        filter_types: ["环境问题", "环保署管制", "解决方案", "provider"],
        languages_enabled: true,
        filter_fields: [
            {
                label: "环境问题",
                name: "issue"
            },
            {
                label: "环保署管制",
                name: "regulation"
            },
            {
                label: "解决方案",
                name: "solution"
            },
            {
                label: "美国解决方案供应商",
                name: "provider"
            },
        ],
        low_level_type: "解决方案",
        low_level_id_field: "solution_id",
        heading: "U.S. Environmental Solutions Toolkit Search",
        description: "The U.S. Environmental Solutions Toolkit is a buyer's resource guide that marries EPA expertise on solving environmental challenges with a catalogue of U.S. providers of related technologies. The U.S. Environmental Solutions Toolkit fosters export opportunities for the U.S. environmental industry as well as fosters and advances environmental protection goals. U.S. environmental technology or services companies that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the U.S. Environmental Solutions industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA or U.S. EPA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA and U.S. EPA assume no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    environmental_solutions_fr: {
        endpoint: "https://api.trade.gov/v1/environmental_solutions_fr/search.json?",
        filter_types: ["Problème environnemental", "Régulation de l'EPA", "Solution", "provider"],
        languages_enabled: true,
        filter_fields: [
            {
                label: "Problème environnemental",
                name: "issue"
            },
            {
                label: "Régulation de l'EPA",
                name: "regulation"
            },
            {
                label: "Solution",
                name: "solution"
            },
            {
                label: "Fournisseur de solution améric",
                name: "provider"
            },
        ],
        low_level_type: "Solution",
        low_level_id_field: "solution_id",
        heading: "U.S. Environmental Solutions Toolkit Search",
        description: "The U.S. Environmental Solutions Toolkit is a buyer's resource guide that marries EPA expertise on solving environmental challenges with a catalogue of U.S. providers of related technologies. The U.S. Environmental Solutions Toolkit fosters export opportunities for the U.S. environmental industry as well as fosters and advances environmental protection goals. U.S. environmental technology or services companies that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the U.S. Environmental Solutions industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA or U.S. EPA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA and U.S. EPA assume no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    environmental_solutions_pt: {
        endpoint: "https://api.trade.gov/v1/environmental_solutions_pt/search.json?",
        filter_types: ["Questão Ambiental", "EPA Regulamento", "Solução", "provider"],
        languages_enabled: true,
        filter_fields: [
            {
                label: "Questão Ambiental",
                name: "issue"
            },
            {
                label: "EPA Regulamento",
                name: "regulation"
            },
            {
                label: "Solução",
                name: "solution"
            },
            {
                label: "Provedora de Soluções EUA",
                name: "provider"
            },
        ],
        low_level_type: "Solução",
        low_level_id_field: "solution_id",
        heading: "U.S. Environmental Solutions Toolkit Search",
        description: "The U.S. Environmental Solutions Toolkit is a buyer's resource guide that marries EPA expertise on solving environmental challenges with a catalogue of U.S. providers of related technologies. The U.S. Environmental Solutions Toolkit fosters export opportunities for the U.S. environmental industry as well as fosters and advances environmental protection goals. U.S. environmental technology or services companies that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the U.S. Environmental Solutions industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA or U.S. EPA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA and U.S. EPA assume no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    environmental_solutions_ru: {
        endpoint: "https://api.trade.gov/v1/environmental_solutions_ru/search.json?",
        filter_types: ["Environmental Issue", "EPA Regulation", "Solution", "provider"],
        languages_enabled: true,
        filter_fields: [
            {
                label: "Environmental Issue",
                name: "issue"
            },
            {
                label: "EPA Regulation",
                name: "regulation"
            },
            {
                label: "Solution",
                name: "solution"
            },
            {
                label: "Provider",
                name: "provider"
            },
        ],
        low_level_type: "Solution",
        low_level_id_field: "solution_id",
        heading: "U.S. Environmental Solutions Toolkit Search",
        description: "The U.S. Environmental Solutions Toolkit is a buyer's resource guide that marries EPA expertise on solving environmental challenges with a catalogue of U.S. providers of related technologies. The U.S. Environmental Solutions Toolkit fosters export opportunities for the U.S. environmental industry as well as fosters and advances environmental protection goals. U.S. environmental technology or services companies that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the U.S. Environmental Solutions industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA or U.S. EPA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA and U.S. EPA assume no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    environmental_solutions_es: {
        endpoint: "https://api.trade.gov/v1/environmental_solutions_es/search.json?",
        filter_types: ["Cuestión Ambiental", "Reglamento de la EPA", "Solución", "provider"],
        languages_enabled: true,
        filter_fields: [
            {
                label: "Cuestión Ambiental",
                name: "issue"
            },
            {
                label: "Reglamento de la EPA",
                name: "regulation"
            },
            {
                label: "Solución",
                name: "solution"
            },
            {
                label: "Proveedor de Soluciones de EE.",
                name: "provider"
            },
        ],
        low_level_type: "Solución",
        low_level_id_field: "solution_id",
        heading: "U.S. Environmental Solutions Toolkit Search",
        description: "The U.S. Environmental Solutions Toolkit is a buyer's resource guide that marries EPA expertise on solving environmental challenges with a catalogue of U.S. providers of related technologies. The U.S. Environmental Solutions Toolkit fosters export opportunities for the U.S. environmental industry as well as fosters and advances environmental protection goals. U.S. environmental technology or services companies that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the U.S. Environmental Solutions industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA or U.S. EPA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA and U.S. EPA assume no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    oil_and_gas: {
        endpoint: "https://api.trade.gov/v1/oil_and_gas/search.json?",
        filter_types: ["project phase", "equipment/service category", "equipment/service", "provider",],
        filter_fields: [
            {
                label: "Project Phase",
                name: "phase"
            },
            {
                label: "Equipment/Service Category",
                name: "category"
            },
            {
                label: "Equipment/Service",
                name: "equipment"
            },
            {
                label: "Provider",
                name: "provider"
            },
        ],
        low_level_type: "equipment/service",
        low_level_id_field: "equipment_id",
        heading: "Oil & Gas Toolkit Search",
        description: "The Oil & Gas Toolkit is a buyer's resource guide to companies in the United States that provide equipment, services or technologies to the oil and gas sector. Equipment, service or technology providers that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the Oil & Gas industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA assumes no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    renewable_energy: {
        endpoint: "https://api.trade.gov/v1/renewable_energy/search.json?",
        filter_types: ["sector", "project type", "offering", "equipment/service type", "specific equipment/service", "provider"],
        filter_fields: [
            {
                label: "Sector",
                name: "sector"
            },
            {
                label: "Project Type",
                name: "project_type"
            },
            {
                label: "Offering",
                name: "offering"
            },
            {
                label: "Equipment/Service Type",
                name: "equipment_type"
            },
            {
                label: "Specific Equipment/Service",
                name: "equipment"
            },
            {
                label: "Provider",
                name: "provider"
            },
        ],
        low_level_type: "specific equipment/service",
        low_level_id_field: "equipment_id",
        heading: "Renewable Energy Toolkit Search",
        description: "The Renewable Energy Toolkit is a buyer's resource guide that connects decision makers for renewable energy projects in foreign countries with U.S. companies providing equipment, services or technologies.  Please begin your search by selecting a renewable energy sector and project type. The sectors included in this first edition of the Toolkit are solar, wind, geothermal, and hydro. U.S. companies that would like to be listed as solution providers for these sectors should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the Renewable Energy industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA assumes no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    next_gen: {
        endpoint: "https://api.trade.gov/v1/next_gen/search.json?",
        filter_types: ["performance improvement area", "capability", "solution", "provider"],
        filter_fields: [
            {
                label: "Performance Improvement Area",
                name: "improvement_area"
            },
            {
                label: "Capability",
                name: "capability"
            },
            {
                label: "Solution",
                name: "solution"
            },
            {
                label: "Provider",
                name: "provider"
            },
        ],
        low_level_type: "solution",
        low_level_id_field: "solution_id",
        heading: "NextGen Toolkit Search",
        description: "The NextGen Solutions Vendors Guide catalogues U.S. providers of the technology and services necessary to implement the Next Generation Air Transportation System (NextGen) in accordance with the International Civil Aviation Organization?s (ICAO) Aviation System Block Upgrade (ASBU) initiative. These state-of-the-art solutions address current and expected needs regarding air traffic management, airspace capacity, flight path efficiency, enhanced communications and data exchanges, and operational improvements to the airport environment.",
        disclaimer: "The information posted on the export.gov website includes hypertext links or pointers to information created and maintained by other public and/or private organizations. Export.gov provides these links and pointers solely for our users' information and convenience. When users select a link to an outside website, they are leaving the export.gov site and are subject to the privacy and security policies of the owners/sponsors of the outside website. The International Trade Administration (ITA) and export.gov do not control or guarantee the accuracy, relevance, timeliness, or completeness of information contained on a linked website.  ITA and export.gov do not endorse the organizations sponsoring linked websites and we do not endorse the views they express or the products/services they offer.  ITA and export.gov cannot authorize the use of copyrighted materials contained in linked websites. Users must request such authorization from the sponsor of the linked website.  ITA and export.gov are not responsible for transmissions users receive from linked websites.  ITA and export.gov do not guarantee that outside websites comply with Section 508 (accessibility requirements) of the Rehabilitation Act."
    },
    smart_grid: {
        endpoint: "https://api.trade.gov/v1/smart_grid/search.json?",
        filter_types: ["sub-sector", "category", "product type", "provider",],
        filter_fields: [
            {
                label: "Sub-Sector",
                name: "sub_sector"
            },
            {
                label: "Category",
                name: "category"
            },
            {
                label: "Product Type",
                name: "product_type"
            },
            {
                label: "Provider",
                name: "provider"
            },
        ],
        low_level_type: "product type",
        low_level_id_field: "product_type_id",
        heading: "SmartGrid Toolkit Search",
        description: "The U.S. Smart Grid Toolkit is a buyer's resource guide that serves as a searchable catalogue of U.S. providers of electricity transmission, distribution, and storage technologies and services. The U.S. Smart Grid Toolkit supports export opportunities for the U.S. smart grid industry as well as fosters and advances global energy policy and grid modernization goals by increasing information sharing in support of deployment of advanced technologies. U.S. smart grid technology or services companies that would like to be listed as solution providers should submit an application.",
        html_definition: "<p><strong>What is the smart grid?</strong></p><p>The smart grid is a modernized electricity T&D network that includes two-way communication systems and enables the integration of technologies that will modernize the grid to improve its efficiency, reliability, sustainability, and security. Grid modernization includes the build-out and upgrade of transmission and distribution (T&D) networks that extend electricity services to new populations and also improve the grid’s efficiency in delivering those services. In many global markets, modernization goes beyond these initial T&D investments to include a range of digital technologies and platforms; including the deployment and integration of information communications technology (ICT) systems to better manage increasingly-complex utility networks and data, and online applications and consumer services that enable energy efficiency programs at the grid edge. Energy storage systems are increasingly being deployed across the electricity system for a wide-range of utility use-cases – such as T&D deferral, frequency regulation, and peak load management – in order to enable better grid management.</p>",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the Smart Grid industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA assumes no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    },
    civil_nuclear: {
        endpoint: "https://api.trade.gov/v1/civil_nuclear/search.json?",
        filter_types: ["sector", "sub-sector", "product", "provider"],
        filter_fields: [
            {
                label: "Sector",
                name: "sector"
            },
            {
                label: "Sub-Sector",
                name: "sub_sector"
            },
            {
                label: "Product",
                name: "product"
            },
            {
                label: "Provider",
                name: "provider"
            },
        ],
        low_level_type: "product",
        low_level_id_field: "product_id",
        heading: "Civil Nuclear Toolkit Search",
        description: "The U.S. Nuclear Energy Toolkit is a buyer's resource guide that helps connect foreign buyers with U.S. providers of civil nuclear products and services. The Toolkit fosters export opportunities for the U.S. civil nuclear industry by connecting U.S. companies and foreign buyers and informing foreign buyers about U.S. capabilities in this sector. U.S. civil nuclear companies that would like to be listed as solution providers should submit an application.",
        disclaimer: "The information on the toolkit website is intended to assist foreign buyers seeking to identify U.S. technology and service providers in the Civil Nuclear industry. The list is not exhaustive of all U.S. exporters of goods, services or technology in this sector. Listing does not constitute endorsement by ITA of a business or its products, services or technology. ITA has performed limited due diligence but recommends strongly that both parties perform their own due diligence, investigation, and background research before entering into a commercial relationship on the basis of the information found on this website.  ITA assumes no responsibility or liability for the actions users may take based on the information provided on this website. ITA reserves the right not to list any particular business and to remove companies or modules from the Toolkit as ITA deems necessary or appropriate."
    }
};

export default config;
