
# Introduction

These endpoints need jwt token to be passed on header.
These endpoints need [google recaptcha V3](AUTH.md) token as parameter.


# Endpoints

## [1. COI DOWNLOAD](COIDOWNLOAD.md#1-coi-download)


### [1. COI DOWNLOAD](COIDOWNLOAD.md#1-coi-download)

```http
POST /api/V1/forms/download_certificate
```

| Parameter          | Type      | Description                                |
|:-------------------|:----------|:-------------------------------------------|
| `dob`              | `number`  | **Required**.                              |
| `mobile`           | `number`  |                                            |
| `loan_acc_number`  | `string`  |                                            |

#### Request

```javascript
{
    "mobile": "12344",
    "dob": "",
    "loan_acc_number": "12344"
}
```

#### Response

```javascript
{
    "success": true,
    "data": {
        "mobile": "1234567779",
        "pdf": "base64"
    },
    "status": 200
}
```

```javascript
{
    "success": true,
    "data": {
        "application_details": [
            {
                "fname": "MR Dilip Vishwakarma",
                "membershipFormNo": "510712143",
                "memberNumber": "02340469",
                "loanAccNo": "881430150000009"
            }
        ]
    },
    "status": 200
}
```
