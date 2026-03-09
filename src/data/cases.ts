export interface CaseStudy {
    slug: string;
    category: string;
    title: string;
    desc: string;
    metric: string;
    metricLabel: string;
    outcome: string;
    icon: string;
    color: string;
    client?: string;
    result?: string;
    duration?: string;
    challenge?: string;
    solution?: string;
    impact?: string;
}

export function getCaseStudies(locale: string): CaseStudy[] {
    const cases: Record<string, CaseStudy[]> = {
        en: [
            {
                slug: "retailer-logistics",
                category: "Logistics",
                title: "Major Retailer",
                desc: "Delivery route optimization for a fleet of 500+ trucks nationwide.",
                metric: "-27%",
                metricLabel: "Expenses",
                outcome: "Reduction in fuel costs",
                icon: "local_shipping",
                color: "orange",
                challenge: "High vehicle downtime and unpredictable delivery schedules.",
                solution: "Implementation of predictive maintenance and real-time route optimization for heavy transporters.",
                impact: "25% reduction in operational costs and 99.8% on-time delivery rate."
            },
            {
                slug: "construction-monitoring",
                category: "Construction",
                title: "BuildMechTrans",
                desc: "Implementation of machine sensors and idle time monitoring on construction sites.",
                metric: "-35%",
                metricLabel: "Idle Time",
                outcome: "Reduction in engine idling",
                icon: "construction",
                color: "blue",
                challenge: "Unauthorized use of equipment and difficult asset scheduling.",
                solution: "Geofencing and automated usage reporting for all job sites.",
                impact: "30% increase in asset utilization and significant reduction in theft risk."
            },
            {
                slug: "fmcg-distribution",
                category: "Distribution",
                title: "FMCG Partner",
                desc: "Route planning automation and delivery timeline tracking.",
                metric: "100%",
                metricLabel: "Compliance",
                outcome: "Delivery schedule accuracy",
                icon: "inventory_2",
                color: "purple",
                challenge: "Rising fuel costs and inefficient last-mile delivery.",
                solution: "AI-based dynamic routing and driver behavior monitoring.",
                impact: "20% reduction in fuel consumption and 15% increase in daily deliveries."
            },
            {
                slug: "mining-optimization",
                category: "Mining",
                title: "Mining Corp",
                desc: "Complete fleet digitalization for open-pit mining operations.",
                metric: "-40%",
                metricLabel: "Downtime",
                outcome: "Equipment availability increase",
                icon: "factory",
                color: "green",
                challenge: "Losing contact with vehicles in remote northern regions.",
                solution: "Satellite-linked telematics and emergency protocol automation.",
                impact: "Zero safety incidents in 24 months and 15% better fuel efficiency."
            },
            {
                slug: "passenger-transport",
                category: "Passenger",
                title: "City Transport Dept",
                desc: "Employee shuttle services organization for 10,000+ workers.",
                metric: "99.8%",
                metricLabel: "SLA",
                outcome: "Schedule compliance",
                icon: "directions_bus",
                color: "red",
                challenge: "Outdated reporting systems and high maintenance backlogs.",
                solution: "Digital fleet department outsourcing with full transparency portals.",
                impact: "40% faster maintenance turnaround and complete regulatory compliance."
            },
            {
                slug: "agriculture-logistics",
                category: "Agriculture",
                title: "AgroHoldings",
                desc: "Harvest and fuel transportation optimization during harvest season.",
                metric: "-35%",
                metricLabel: "Time Loss",
                outcome: "Seasonal efficiency gain",
                icon: "agriculture",
                color: "yellow",
                challenge: "Peak season capacity constraints and fuel theft issues.",
                solution: "GPS tracking, fuel sensors, and dynamic resource allocation.",
                impact: "35% time loss reduction and complete fuel consumption transparency."
            }
        ],
        ru: [
            {
                slug: "retailer-logistics",
                category: "Логистика",
                title: "Крупный ритейлер",
                desc: "Оптимизация маршрутов доставки для парка из 500+ грузовиков по всей стране.",
                metric: "-27%",
                metricLabel: "Расходы",
                outcome: "Снижение затрат на топливо",
                icon: "local_shipping",
                color: "orange",
                challenge: "Высокий простой транспортных средств и непредсказуемые графики доставки.",
                solution: "Внедрение предиктивного технического обслуживания и оптимизация маршрутов в реальном времени.",
                impact: "Снижение эксплуатационных расходов на 25% и своевременность доставки 99.8%."
            },
            {
                slug: "construction-monitoring",
                category: "Строительство",
                title: "СтройМехТранс",
                desc: "Внедрение датчиков на технику и мониторинг простоев на строительных объектах.",
                metric: "-35%",
                metricLabel: "Простои",
                outcome: "Снижение работы двигателя на холостом ходу",
                icon: "construction",
                color: "blue",
                challenge: "Несанкционированное использование оборудования и сложное планирование активов.",
                solution: "Геозонирование и автоматизированная отчетность по всем объектам.",
                impact: "Увеличение использования активов на 30% и снижение риска краж."
            },
            {
                slug: "fmcg-distribution",
                category: "Дистрибуция",
                title: "FMCG-партнер",
                desc: "Автоматизация планирования маршрутов и отслеживание соблюдения сроков доставки.",
                metric: "100%",
                metricLabel: "Соблюдение",
                outcome: "Точность графика доставки",
                icon: "inventory_2",
                color: "purple",
                challenge: "Рост цен на топливо и неэффективная доставка последней мили.",
                solution: "Динамическая маршрутизация на базе ИИ и мониторинг поведения водителей.",
                impact: "Снижение расхода топлива на 20% и увеличение ежедневных доставок на 15%."
            },
            {
                slug: "mining-optimization",
                category: "Горная добыча",
                title: "Горнодобывающая компания",
                desc: "Полная цифровизация автопарка для открытых горных работ.",
                metric: "-40%",
                metricLabel: "Простои",
                outcome: "Повышение доступности техники",
                icon: "factory",
                color: "green",
                challenge: "Потеря связи с транспортными средствами в отдаленных северных регионах.",
                solution: "Телематика со спутниковой связью и автоматизация протоколов реагирования.",
                impact: "Ноль инцидентов за 24 месяца и повышение топливной эффективности на 15%."
            },
            {
                slug: "passenger-transport",
                category: "Пассажирские перевозки",
                title: "Городской транспорт",
                desc: "Организация доставки сотрудников для 10,000+ работников.",
                metric: "99.8%",
                metricLabel: "SLA",
                outcome: "Соблюдение графика",
                icon: "directions_bus",
                color: "red",
                challenge: "Устаревшие системы отчетности и большая задолженность по ТО.",
                solution: "Цифровой аутсорсинг с порталами полной прозрачности.",
                impact: "Ускорение ТО на 40% и полное соответствие нормативным требованиям."
            },
            {
                slug: "agriculture-logistics",
                category: "Сельское хозяйство",
                title: "АгроХолдинги",
                desc: "Оптимизация перевозки урожая и ГСМ в сезон сбора.",
                metric: "-35%",
                metricLabel: "Потери времени",
                outcome: "Повышение сезонной эффективности",
                icon: "agriculture",
                color: "yellow",
                challenge: "Ограничения мощности в пиковый сезон и хищения топлива.",
                solution: "GPS-трекинг, датчики топлива и динамическое распределение ресурсов.",
                impact: "Снижение потерь времени на 35% и полная прозрачность расхода топлива."
            }
        ],
        hi: [
            {
                slug: "retailer-logistics",
                category: "लॉजिस्टिक्स",
                title: "प्रमुख रिटेलर",
                desc: "पूरे देश में 500+ ट्रकों के फ्लीट के लिए डिलीवरी रूट अनुकूलन।",
                metric: "-27%",
                metricLabel: "खर्च",
                outcome: "ईंधन लागत में कमी",
                icon: "local_shipping",
                color: "orange",
                challenge: "उच्च वाहन डाउनटाइम और अप्रत्याशित डिलीवरी शेड्यूल।",
                solution: "भारी परिवहनों के लिए भविष्यवाणी रखरखाव और वास्तविक समय मार्ग अनुकूलन का कार्यान्वयन।",
                impact: "परिचालन लागत में 25% की कमी और 99.8% समय पर डिलीवरी दर।"
            },
            {
                slug: "construction-monitoring",
                category: "निर्माण",
                title: "बिल्डमेकट्रांस",
                desc: "निर्माण स्थलों पर मशीन सेंसर और आलस्य समय निगरानी का कार्यान्वयन।",
                metric: "-35%",
                metricLabel: "डाउनटाइम",
                outcome: "इंजन आलस्य में कमी",
                icon: "construction",
                color: "blue",
                challenge: "उपकरण का अनधिकृत उपयोग और कठिन संपत्ति शेड्यूलिंग।",
                solution: "सभी जॉब साइटों के लिए जिओफेंसिंग और स्वचालित उपयोग रिपोर्टिंग।",
                impact: "संपत्ति उपयोग में 30% वृद्धि और चोरी के जोखिम में महत्वपूर्ण कमी।"
            },
            {
                slug: "fmcg-distribution",
                category: "वितरण",
                title: "FMCG पार्टनर",
                desc: "रूट योजना स्वचालन और डिलीवरी समयसीमा ट्रैकिंग।",
                metric: "100%",
                metricLabel: "अनुपालन",
                outcome: "डिलीवरी अनुसूची सटीकता",
                icon: "inventory_2",
                color: "purple",
                challenge: "बढ़ती ईंधन लागत और अकुशल अंतिम-मील डिलीवरी।",
                solution: "एआई-आधारित गतिशील रूटिंग और ड्राइवर व्यवहार निगरानी।",
                impact: "ईंधन खपत में 20% की कमी और दैनिक डिलीवरी में 15% की वृद्धि।"
            },
            {
                slug: "mining-optimization",
                category: "खनन",
                title: "माइनिंग कॉर्प",
                desc: "ओपन-पिट खनन संचालन के लिए पूर्ण फ्लीट डिजिटलीकरण।",
                metric: "-40%",
                metricLabel: "डाउनटाइम",
                outcome: "उपकरण उपलब्धता में वृद्धि",
                icon: "factory",
                color: "green",
                challenge: "दूरस्थ उत्तरी क्षेत्रों में वाहनों से संपर्क खोना।",
                solution: "उपग्रह-लिंक्ड टेलीमैटिक्स और आपातकालीन प्रोटोकॉल स्वचालन।",
                impact: "24 महीनों में शून्य सुरक्षा घटनाएं और 15% बेहतर ईंधन दक्षता।"
            },
            {
                slug: "passenger-transport",
                category: "यात्री परिवहन",
                title: "सिटी ट्रांसपोर्ट",
                desc: "10,000+ श्रमिकों के लिए कर्मचारी शटल सेवाओं का आयोजन।",
                metric: "99.8%",
                metricLabel: "एसएलए",
                outcome: "अनुसूची अनुपालन",
                icon: "directions_bus",
                color: "red",
                challenge: "पुरानी रिपोर्टिंग प्रणालियां और उच्च रखरखाव बैकलॉग।",
                solution: "पूर्ण पारदर्शिता पोर्टल के साथ डिजिटल फ्लीट विभाग आउटसोर्सिंग।",
                impact: "40% तेज रखरखाव टर्नअराउंड और पूर्ण नियामक अनुपालन।"
            },
            {
                slug: "agriculture-logistics",
                category: "कृषि",
                title: "एग्रोहोल्डिंग्स",
                desc: "फसल के मौसम के दौरान फसल और ईंधन परिवहन अनुकूलन।",
                metric: "-35%",
                metricLabel: "समय हानि",
                outcome: "मौसमी दक्षता लाभ",
                icon: "agriculture",
                color: "yellow",
                challenge: "पीक सीजन क्षमता बाधाएं और ईंधन चोरी के मुद्दे।",
                solution: "जीपीएस ट्रैकिंग, ईंधन सेंसर, और गतिशील संसाधन आवंटन।",
                impact: "फसल के मौसम के दौरान 35% समय हानि में कमी और पूर्ण ईंधन पारदर्शिता।"
            }
        ]
    };

    return cases[locale] || cases.en;
}
