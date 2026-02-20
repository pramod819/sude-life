
# Introduction

endpoints to fetch job list.


# Endpoints

## [1. Get Job List](CAREERS.md#1-job-list)


### [1. Get Job List](CAREERS.md#1-job-list)

```http
GET /api/V1/careers/job_list
```

#### Response

```javascript
{
    "success": bool,
    "data": {
        "businessUnit": string[],
        "location": string[],
        "jobList": [
            {
                "designation": string,
                "department": string,
                "experience": string,
                "location": string[],
                "description": string,
                "employeeType": string,
                "applyLink": string
            }
        ]
    },
    "status": int
}
```