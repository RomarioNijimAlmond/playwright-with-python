import { PlaywrightTestConfig, devices } from "@playwright/test";
require('dotenv').config()

const config: PlaywrightTestConfig = {

    timeout: 150000,
    globalTimeout: 150000,

    reporter: [
        ["list"],
        ["junit", { outputFile: "reports/test-results.xml" }],
        ["allure-playwright"],
        ["json", { outputFile: "reports/test-results.json" }],
        ["html", { open: "never" }],
    ],

    use: {
        trace: 'on',
        screenshot: 'on',
        ignoreHTTPSErrors: true,
        viewport: { width: 1400, height: 900 },

        video: {
            mode: 'retain-on-failure'
        },
        contextOptions: {},
        launchOptions: {
            headless: process.env.CI ? true : false,
            slowMo: 500,
        }
    },

    projects: [
        {
            name: 'Google Chrome',
            use: { ...devices['Desktop Chrome'], viewport: { width: 1400, height: 900 } }, 
        },

        // {
        //     name: 'Edge Browser',
        //     use: {
        //         browserName: 'chromium',
        //         channel: 'msedge',
        //         viewport: { width: 1400, height: 900 },
        //     }
        // },
        // {
        //     name: 'Firefox Browser',
        //     use: {
        //         browserName: 'firefox',
        //         channel: 'firefox',
        //         viewport: { width: 1400, height: 900 },
        //     }
        // },
    ],

    // testMatch: ["PlaywrightProject/API.spec.ts"],
    // retries: 0,
    // reporter: [["dot"], ["json", {outputFile: "test-result.json"}]],
    // // ['experimental-allure-playwright']],

}

module.exports = config;
export default config;