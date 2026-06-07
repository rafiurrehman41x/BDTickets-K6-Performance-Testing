import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 5,
    duration: '20s',

    thresholds: {
        http_req_duration: ['p(95)<3000'],
        http_req_failed: ['rate<0.01'],
        checks: ['rate>0.95'],
    },
};

export default function () {

    // BDTICKETS BUS SEARCH PAGE REQUEST
    const res = http.get(
        'https://bdtickets.com/travel/search/bus/dhaka-to-bogura?journeyDate=2026-06-07'
    );

    // VALIDATION
    const success = check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 3s': (r) => r.timings.duration < 3000,
    });

    // LOGS
    console.log(`Status: ${res.status}`);
    console.log(`Response Time: ${res.timings.duration} ms`);

    // ERROR BODY
    if (!success) {
        console.log('Response Body:');
        console.log(res.body);
    }

    sleep(1);
}

// HTML REPORT
export function handleSummary(data) {
    return {
        "bdtickets-bus-search-report.html": htmlReport(data),
    };
}
