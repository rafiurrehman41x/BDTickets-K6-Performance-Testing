# BDTickets-K6-Performance-Testing
Performance Testing Project using K6 for BDTickets Website.
# BDTickets K6 Performance Testing

## Project Overview

This repository contains performance testing scripts developed using K6 for the BDTickets website.

The objective of this project is to evaluate the performance, response time, and reliability of different BDTickets pages under concurrent user load.

## Tools Used

* K6
* JavaScript
* HTML Reporter

## Test Scenarios

### 1. Homepage Performance Test

#### Objective

Verify homepage performance under concurrent user load.

#### URL Tested

https://bdtickets.com/

#### Configuration

* Virtual Users (VUs): 5
* Duration: 20 Seconds

#### Validation

* Status Code = 200
* Response Time < 2 Seconds

#### Files

* bdtickets-homepage-performance-test.js
* bdtickets-homepage-report.html

---

### 2. Bus Search Performance Test

#### Objective

Verify bus search page performance under concurrent user load.

#### URL Tested

https://bdtickets.com/travel/search/bus/dhaka-to-bogura?journeyDate=2026-06-07

#### Configuration

* Virtual Users (VUs): 5
* Duration: 20 Seconds

#### Validation

* Status Code = 200
* Response Time < 3 Seconds

#### Files

* bdtickets-bus-search-performance-test.js
* bdtickets-bus-search-report.html

---

## Test Execution Commands

Homepage Test

k6 run bdtickets-homepage-performance-test.js

Bus Search Test

k6 run bdtickets-bus-search-performance-test.js

---

## Repository Structure

BDTickets-K6-Performance-Testing

├── README.md

├── Homepage-Test
│   ├── bdtickets-homepage-performance-test.js
│   ├── bdtickets-homepage-report.html
│   └── homepage-screenshot.png

└── Bus-Search-Test
├── bdtickets-bus-search-performance-test.js
├── bdtickets-bus-search-report.html
└── bus-search-screenshot.png

---

## Author

Rafiur Rehman

 Junior QA Engineer | QA Enthusiast

Learning Performance Testing with K6
