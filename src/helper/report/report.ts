const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Automation Report of KiwiSaver projection",
    pageTitle: "KiwiSaver Calculator - Westpac NZ",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "122",
        },
        device: "Abdul N - PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Westpac kiwisaver calculator" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "Functional tests" }
        ],
    },
});