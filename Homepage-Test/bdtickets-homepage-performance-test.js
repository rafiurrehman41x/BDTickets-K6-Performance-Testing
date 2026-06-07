import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 5,
    duration: '20s',
    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.01'],
        checks: ['rate>0.95'],
    },
};

export default function () {
    const res = http.get('https://bdtickets.com/');
    const success = check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 2s': (r) => r.timings.duration < 2000,
    });
    console.log(`Status: ${res.status}`);
    console.log(`Response Time: ${res.timings.duration} ms`);
    if (!success) {
        console.log('Response Body:');
        console.log(res.body);
    }
    sleep(1);
}

export function handleSummary(data) {
    return {
        'report.html': htmlReport(data),
    };
}
