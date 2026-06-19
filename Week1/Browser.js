function launchBrowser(browserName, url) {

    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
        console.log("Navigating to: https://www.redbus.in/?gad_source=1&gad_campaignid=22479772058&gclid=CjwKCAiA3rPKBhBZEiwAhPNFQNQMZ-7aMJlgX2otyU25BINkaOx4YI-VFHXT5U9CWuKbmuxcJCDB5xoCA98QAvD_BwE" + url);
    } else if (browserName === "firefox") {
        console.log("Launching Firefox browser");
    } else if (browserName === "edge") {
        console.log("Launching Edge browser");
    } else {
        console.log("Browser not supported");
    }
}

function runTest(testType) {

    switch (testType) {

        case "smoke":
            console.log("Running Smoke Test");
            break;

        case "sanity":
            console.log("Running Sanity Test");
            break;

        case "regression":
            console.log("Running Regression Test");
            break;

        default:
            console.log("Invalid Test Type");
    }
}

// Function calls
launchBrowser("edge");
runTest("smoke");