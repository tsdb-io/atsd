const githubSettings = {
    docsRepo: 'axibase/atsd',
};

const portalsMenu = [
    ['', 'Overview'],
    'freemarker.md',
    'portal-settings.md',
    'portals-overview.md',
    'selecting-series.md',
];

const topNavMenu = [
    { text: 'New: Finance Edition', link: '/finance/' },
    { text: "REST API", link: '/api/data/' },
    { text: "Network API", link: '/api/network/' },
    { text: 'SQL', link: '/sql/' },
    { text: 'Rule Engine', link: '/rule-engine/' },
    { text: 'Install', link: '/installation/', highlighted: true },
    { text: 'Configure', link: '/administration/' },
    { text: 'Integrate', link: '/integration/' }
];

const installationMenu = [
    ['', 'Overview'],
    ['docker.md', 'Docker Image'],
    ['docker-redhat.md', 'RedHat Certified Image'],
    ['https://axibase.com/docs/axibase-collector/installation-on-kubernetes.html', 'Kubernetes'],
    ['aws-emr-s3.md','Amazon EMRFS'],
    ['cloudera.md','Cloudera/CDH'],
    ['ubuntu-debian-apt.md','Ubuntu/Debian\\: apt'],
    ['ubuntu-debian-deb.md','Ubuntu/Debian\\: deb'],
    ['redhat-centos-rpm.md','RHEL/Centos\\: yum'],
    ['redhat-centos-yum.md','RHEL/Centos\\: rpm'],
    ['sles-rpm.md','SLES\\: rpm'],
    ['other-distributions.md','Other distributions'],
];

const integrationMenu = [
    {
        title: 'Collectors', children: [
            'collectd/',
            'scollector/',
            'tcollector/',
            'statsd/',
            'graphite/',
            'java-metrics/',
            'nmon/',
            ['https://axibase.com/docs/axibase-collector/installation-on-kubernetes.html', 'Axibase Collector'],
            'spring-boot/'
        ]
    },
    {
        title: 'Reporting Tools', children: [
            'alteryx/',
            'chartlab/',
            'matlab/',
            'pentaho/',
            'spss/modeler/',
            'spss/statistics/',
            'stata/',
            'tableau/',
            'spotfire/',
            'aer/',
        ]
    },
    {
        title: 'Drivers', children: [
            ['https://github.com/axibase/atsd-jdbc', 'JDBC'],
            'odbc/',
        ]
    },
    
    ['/parsers/csv/', 'CSV Parsers'],

    ['https://axibase.com/use-cases/', 'Examples'],
];

const restApiMenu = [
    ['', 'Overview'], // Waiting for New overview page
    {
        title: 'Series', children: [
            `/api/data/series/get`,
            `/api/data/series/query`,
            `/api/data/series/insert`,
            `/api/data/series/csv-insert`,
            `/api/data/series/delete`,
        ]
    },
    {
        title: 'Properties', children: [
            `/api/data/properties/get`,
            `/api/data/properties/query`,
            `/api/data/properties/list-types`,
            `/api/data/properties/insert`,
            `/api/data/properties/delete`,
        ]
    },
    {
        title: 'Messages', children: [
            `/api/data/messages/query`,
            `/api/data/messages/insert`,
            `/api/data/messages/webhook`,
            `/api/data/messages/delete`,
            `/api/data/messages/stats`,
        ]
    },
    {
        title: 'Alerts', children: [
            `/api/data/alerts/query`,
            `/api/data/alerts/update`,
            `/api/data/alerts/delete`,
            `/api/data/alerts/history-query`,
        ]
    },
    {
        title: 'Metric', children: [
            `/api/meta/metric/get`,
            `/api/meta/metric/list`,
            `/api/meta/metric/update`,
            `/api/meta/metric/create-or-replace`,
            `/api/meta/metric/rename`,
            `/api/meta/metric/delete`,
            `/api/meta/metric/series`,
            `/api/meta/metric/series-tags`,
        ]
    },
    {
        title: 'Entity', children: [
            `/api/meta/entity/get`,
            `/api/meta/entity/list`,
            `/api/meta/entity/update`,
            `/api/meta/entity/create-or-replace`,
            `/api/meta/entity/delete`,
            `/api/meta/entity/entity-groups`,
            `/api/meta/entity/metrics`,
            `/api/meta/entity/property-types`,
        ]
    },
    {
        title: 'Entity Group', children: [
            `/api/meta/entity-group/get`,
            `/api/meta/entity-group/list`,
            `/api/meta/entity-group/update`,
            `/api/meta/entity-group/create-or-replace`,
            `/api/meta/entity-group/delete`,
            `/api/meta/entity-group/get-entities`,
            `/api/meta/entity-group/add-entities`,
            `/api/meta/entity-group/set-entities`,
            `/api/meta/entity-group/delete-entities`,
        ]
    },
    {
        title: 'Replacement Table', children: [
            `/api/meta/replacement-table/get`,
            `/api/meta/replacement-table/list`,
            `/api/meta/replacement-table/update`,
            `/api/meta/replacement-table/create-or-replace`,
            `/api/meta/replacement-table/delete`,
        ]
    },
    {
        title: 'Extended', children: [
            `/api/data/ext/command`,
            `/api/data/ext/csv-upload`,
            `/api/data/ext/nmon-upload`,
            `/api/meta/misc/search`,
            `/api/meta/misc/ping`,
            `/api/meta/misc/permissions`,
            `/api/meta/misc/portal`,
            `/api/meta/misc/version`,
        ]
    },
    ['/api/clients/', "API Clients"],
];

const landingPageMenu = [
    '',
    'editions.md',
    'architecture.md',
    'schema.md',
    'licensing.md'
];

const networkApiMenu = [
    ['', 'Overview'],
    {
        title: "Commands", children: [
            ['series.md', 'series'],
            ['property.md', 'property'],
            ['message.md', 'message'],
            ['csv.md', 'csv'],
            ['entity.md', 'entity'],
            ['metric.md', 'metric'],
            ['ping.md', 'ping'],
            ['time.md', 'time'],
            ['version.md', 'version'],
            ['exit.md', 'exit'],
            ['nmon.md', 'nmon'],
            ['picomp2.md', 'picomp2'],
            ['tcollector.md', 'tcollector'],
            ['graphite.md', 'Graphite'],
            ['statsd.md', 'StatsD'],
        ]
    }
];

const ruleEngineMenu = [
    ['', 'Overview'],
    ['window.md', 'Windows'],
    ['grouping.md', 'Grouping'],
    ['filters.md', 'Filters'],
    ['condition.md', 'Condition'],
    ['operators.md', 'Operators'],
    ['window-fields.md', 'Fields'],
    ['variables.md', 'Variables'],
    ['functions.md', 'Functions'],
    ['placeholders.md', 'Placeholders'],
    ['control-flow.md', 'Control Flow'],
    ['overrides.md', 'Overrides'],
    ['email.md', 'Email'],
    ['incoming-webhooks.md', 'Incoming Webhooks'],
    ['notifications/', 'Outgoing Webhooks'],
    ['scripts.md', 'Scripts'],
    ['derived.md', 'Derived Commands'],
    ['logging.md', 'Logging'],
];

const ruleNotificationsMenu = [
    ['', 'Overview'],
    ['slack.md', 'Slack'],
    ['telegram.md', 'Telegram'],
    ['discord.md', 'Discord'],
    ['hipchat.md', 'HipChat'],
    ['aws-api.md', 'AWS API'],
    ['aws-sns.md', 'Amazon SNS'],
    ['aws-sqs.md', 'Amazon SQS'],
    ['azure-sb.md', 'Azure Service Bus'],
    ['gcp-ps.md', 'GCP Pub/Sub'],
    ['webhook.md', 'Webhook'],
    'custom.md',
];

const sqlMenu = [
    '',
    ['examples/', 'Examples'],
    ['permissions.md', 'Permissions'],
    ['performance.md', 'Query Optimization'],
    ['sql-console.md', 'Query Console'],
    ['client/', 'Bash Client'],
    ['scheduled-sql.md', 'Scheduled Queries'],
    ['scheduled-sql-store.md', 'Materialized Views'],
    ['api.md', 'API Endpoint'],
    ['https://github.com/axibase/atsd-jdbc#jdbc-driver', 'JDBC Driver'],
];

const administrationMenu = [
    ['/portals/', "Portals"],
    ['/forecasting/', "Forecasts"],
    {
        title: "User Management", children: [
            ['user-authentication.md', 'User Authentication'],
            ['user-authorization.md', 'User Authorization'],
            ['collector-account.md', 'Collector Account'],
            ['collector-rw-account.md', 'Collector R/W Account'],
        ]
    },
    {
        title: "SSL", children: [
            ['ssl-ca-signed.md', 'CA-signed Certificate'],
            ['ssl-lets-encrypt.md', 'Let\'s Encrypt'],
            ['ssl-self-signed.md', 'Self-signed Certificate'],
        ]
    },
    ['restarting.md', 'Restarting'],
    ['update.md', 'Updating'],
    ['logging.md', 'Logging'],
    ['server-properties.md', 'Server Properties'],
    {
        title: "Configuration", children: [
            ['configuration-files.md', 'Configuration Files'],
            ['mail-client.md', 'Mail Client'],
            ['timezone.md', 'Time Zone'],
            ['workday-calendar.md', 'Workday Calendar'],
            ['memory-allocation.md', 'Memory Allocation'],
            ['swap-space.md', 'Swap Space'],
            ['networking-settings.md', 'Network Settings'],
            ['change-base-directory.md', 'Custom Base Directory'],
            ['change-data-directory.md', 'Custom Data Directory'],
            ['change-owner.md', 'Directory Owner'],
            ['command-replication.md', 'Command Replication'],
            ['hbase-replication.md', 'HBase Replication'],
        ]
    },
    {
        title: "Data Management", children: [
            ['data_retention.md', 'Data Retention'],
            ['metric-persistence-filter.md', 'Persistence Filters'],
            ['compaction.md', 'Compaction'],
            ['compaction-test.md', 'Compaction Test'],
            ['compaction/', 'Compression Tests'],
        ]
    },
    {
        title: "Monitoring", children: [
            ['monitoring.md', 'Overview'],
            ['monitoring-metrics/jmx.md', 'JMX Metrics'],
            ['monitoring-metrics/json.md', 'JSON Metrics'],
            ['monitoring-metrics/file.md', 'File Metrics'],
            ['monitoring-metrics/rule-engine.md', 'Alerting'],
            ['monitoring-metrics/portals.md', 'Portals'],
            ['monitoring-metrics/ingestion-statistics.md', 'Ingestion Statistics'],
            ['monitoring-metrics/database-tables.md', 'Database Tables'],
            ['monitoring-metrics/io-tests.md', 'I/O Tests'],
            ['monitoring-metrics/hbase-write-test.md', 'HBase Write Test'],
        ]
    },
    {
        title: "Migration", children: [
            ['migration/cluster.md', 'Cluster Migration'],
            ['migration/container.md','Container Migration'],
            ['migration/','Database Migration'],
            ['migration/install-java-8.md','Install Java 8'],
            ['migration/mr-settings.md','MapReduce Settings'],
            ['migration/reporter.md','Data Reporter'],
        ]
    },
    ['support.md', "Support"],
]

const forecastMenu = [
    ['', 'Overview'],
    'calendar_exceptions_testing.md'
];

const csvParsers = [
    ['', 'Overview'],
    'csv-schema.md'
]

const gettingStartedMenu = [
    { title: "Getting Started", children: [
        ["getting-started.html",        "1. Introduction"   ],
        ["getting-started-insert.html", "2. Inserting Data" ],
        ["getting-started-portal.html", "3. Portals"        ],
        ["getting-started-export.html", "4. Exporting Data" ],
        ["getting-started-sql.html",    "5. SQL"            ],
        ["getting-started-alert.html",  "6. Alerting"       ],
    ]},
];

const financeMenu = [
    ['', 'Overview'],
    ['sql.md', 'SQL'],
    {
        title: "Reading Data", children: [
            ['trades-export.md', 'Trades'],
            ['ohlcv-export.md', 'Calculated OHLCV Bars'],
            ['session-summary-export-ohlcv.md', 'Stored OHLCV Bars'],
            ['statistics-export-quotes.md', 'Quotes'],
            ['session-summary-export.md', 'Snapshots'],
            ['reference-export.md', 'Reference Data'],
            ['version-export.md', 'Reference Versions']
        ]
    },    
    {
        title: "Writing Data", children: [
            ['command-trade-insert.md', 'Insert Trades'],
            ['session-summary-import-ohlcv.md', 'Insert OHLCV Bars'],
            ['command-statistics-insert-quotes.md', 'Insert Quotes'],
            ['session-summary-import.md', 'Insert Snapshots'],
            ['command-instrument-entity.md', 'Insert Reference Data'],
            ['trades-upload.md', 'Backfill Trades'],
            ['trades-delete.md', 'Delete Trades'],
            ['instrument-delete.md', 'Delete Instrument']
        ]
    },
    ['./requirements.md', 'Requirements'],
    ['./install.md', 'Installation'],
    ['./getting-started.md', 'Getting Started']
];

const financeMenuRu = [
    ['', "Общая информация"],
    ['./sql.md', 'SQL'],
    {
        title: "Экспорт данных", children: [
            ['../trades-export.md', 'Сделки'],
            ['../ohlcv-export.md', 'OHLCV'],
            ['../statistics-export-quotes.md', 'Котировки'],
            ['../session-summary-export.md', 'Снэпшоты'],
            ['../reference-export.md', 'Референтные данные'],
            ['../version-export.md', 'Версии реф. данных']
        ]
    },    
    {
        title: "Запись данных", children: [
            ['../command-trade-insert.md', 'Сделки'],
            ['../session-summary-import-ohlcv.md', 'OHLCV'],
            ['../command-statistics-insert-quotes.md', 'Котировки'],
            ['../session-summary-import.md', 'Снэпшоты'],
            ['../command-instrument-entity.md', 'Референтные данные'],
            ['../trades-upload.md', 'Сделки (верификация)'],
            ['../trades-delete.md', 'Удаление сделок'],
            ['../instrument-delete.md', 'Удаление инструментов']
        ]
    },
    {
        title: "Установка", children: [
            ['./install.md', 'Дистрибутивы и требования']
        ]
    },
    {
        title: "Мониторинг", children: [
            ['./latency_monitoring.md', 'Мониторинг данных']
        ]
    },
    {
        title: "Блог", children: [
            ['./notes/moex_dma.md', 'Прямое подключение к бирже'],
            ['./notes/market-order-myths.md', 'Мифы о рыночных заявках'],
            ['./notes/cross-trade.md', 'Обнаружение кросс-сделок'],
            ['./notes/moex_waprice.md', 'Расчет waprice без РПС']
        ]
    }
];

module.exports = {
    base: '/docs/atsd/',
    title: 'Axibase Time Series Database',
    titleNote: 'ATSD',
    description: "User manual and API reference for Axibase® Time Series Database (ATSD)",
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    staticFilesExtensionsTest: /(?:tcollector|\.(?:pdf|xlsx?|xml|txt|csv|str|java|json|sql|sps|yxmd|htm|py|prpt|do|tdc|jsonld|ktr|service|sh|ya?ml|lua|properties|conf(?:ig)?))$/,
    themeConfig: {
        nav: topNavMenu,
        navByPath: {
            "/finance/": [],
            "/": topNavMenu,
            "": [],
        },
        homePageByPath: {
            "/finance/ru/": "/finance/ru/",
            "/finance/": "/finance/",
            "": "/",
        },
        feedback: {
            title: "Contact Axibase",
            url: "/eml_ping",
            method: "GET",
        },
        trackNavURL: "/tracknav/",
        logo: '/images/axibase_logo_site.png',
        algolia: {
            appId: 'BH4D9OD16A',
            apiKey: 'd46fb51356528c83c9c1c427e6d7206d',
            indexName: 'axibase',
            algoliaOptions: {
                facetFilters: ["tags:atsd"]
            }
        },
        sidebarDepth: 1,
        sidebar: {
            '/administration/compaction/': [],
            '/administration/': administrationMenu,
            '/api/data/': restApiMenu,
            '/api/meta/': restApiMenu,
            '/api/network/': networkApiMenu,
            '/api/': [],
            '/changelogs/': [],
            '/finance/ru/': financeMenuRu,
            '/finance/': financeMenu,
            '/forecasting/': forecastMenu,
            '/installation/': installationMenu,
            '/integration/': integrationMenu,
            '/parsers/csv/': csvParsers,
            '/parsers/': [],
            '/portals/': portalsMenu,
            '/rule-engine/notifications/': ruleNotificationsMenu,
            '/rule-engine/': ruleEngineMenu,
            '/search/': [],
            '/shared/': [],
            '/sql/': sqlMenu,
            '/tutorials/': gettingStartedMenu,
            '/versioning/': [],
            // Keep it last
            '/': landingPageMenu,
            '': [],
        },

        remark42Config:{
            host: "https://axibase.com/comments",
            site_id: "docs_atsd",
            components: ["embed"],
            show_email_subscription: true,
            __colors__: {
                "--color8": "#216abb",
                "--color9": "#216abb",
                "--color15": "#216abb",
                "--color33": "#467fbd",
                "--color47": "rgba(6, 77, 212, 0.4)",
            }
        },

        searchMaxSuggestions: 10,

        ...githubSettings
    },
    markdown: {
        slugify
    },
}

loadFromEnv("ga", "GA_API_KEY");
loadFromEnv("sc", "STATCOUNTER_ID");
loadFromEnv("scSec", "STATCOUNTER_SEC");

function loadFromEnv(setting, varName) {
    if (!(setting in module.exports)) {
        let value = require('process').env[varName];
        if (value) {
            module.exports[setting] = value;
        }
    }
}

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-+=[\]{}|\\;:"'<>,.?/]+/g

function slugify (str) {
  return str
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // Remove continous separators
    .replace(/\-{2,}/g, '-')
    // Remove prefixing and trailing separtors
    .replace(/^\-+|\-+$/g, '')
    // ensure it does not start with a number (#121)
    .replace(/^(\d)/, '_$1')
    // lowercase
    .toLowerCase()
}
