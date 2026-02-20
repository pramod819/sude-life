
# Introduction

These endpoints need jwt token to be passed on header.
These endpoints need [google recaptcha V3](AUTH.md) token as parameter.


# Endpoints

## [1. GRIEVANCE SUBMISSION](GRIEVANCE.md#1-create-grievance)


### [1. GRIEVANCE SUBMISSION](GRIEVANCE.md#1-create-grievance)

```http
POST /api/V1/forms/grievance
```

| Parameter    | Type      | Description                                |
|:-------------|:----------|:-------------------------------------------|
| `policy_no`  | `string`  | **Required for existing customer**.        |
| `first_name` | `string`  | **Required**.                              |
| `last_name`  | `string`  | **Required**.                              |
| `mobile`     | `number`  | **Required**.                              |
| `phone`      | `number`  |                                            |
| `email`      | `string`  |                                            |
| `message`    | `string`  | **Required**.                              |
| `customer`   | `boolean` | **Required**.  true for existing customer  |
| `otp`        | `string`  | **Required**. OTP from SMS API             |
| `token`      | `string`  | **Required**. valid google recaptcha token |

#### Request

```javascript
{
    "policy_no": "12344",
    "email": "",
    "mobile": "12344",
    "first_name": "Test",
    "last_name": "Test",
    "phone": "",
    "message": "Test",
    "customer": true,
    "otp": "12346",  
    "token": "12344"
}
```

#### Response

```javascript
{
    "success": true,
        "data": {
        "ClientId": "",
            "PolicyNo": "12344",
            "TransactionId": "10332552",
            "Status": "Success",
            "Remark": "",
            "CaseCreation": {
            "CaseId": "SUD-040325-34979",
            "Call_Type": "Others",
            "Sub_Type": "Customer Complaint through Web",
            "Id": "5007100000FGbKkAAL"
        }
    },
    "status": 200
}
```
