
# Introduction

These endpoints need jwt token to be passed on header.
These endpoints need [google recaptcha V3](AUTH.md) token as parameter.


# Endpoints

## [1. CUSTOMER LOGIN](CUSTOMERLOGIN.md#1-customer-login)


### [1. CUSTOMER LOGIN](#1-customer-login)

```http
POST /api/V1/forms/customer_login
```

| Parameter           | Type      | Description                                |
|:--------------------|:----------|:-------------------------------------------|
| `policy_no`         | `string`  | **Required**.                              |
| `dob`               | `string`  | **Required**.    dd/mm/YYYY                |
| `token`             | `string`  | **Required**. valid google recaptcha token |

#### Request

```javascript
{
    "policy_no": "906611",
    "dob": "12/10/2001",
    "token": "49458490"
}
```

#### Response

```javascript
{
    "success": true,
        "data": {
        "ClientId": "",
        "PolicyNo": "906611",
        "TransactionId": "10332695",
        "Status": "Success",
        "Remark": "Policy details matched"
    },
    "status": 200
}
```