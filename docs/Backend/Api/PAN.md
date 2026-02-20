
# Introduction

These endpoints need jwt token to be passed on header.
These endpoints need [google recaptcha V3](AUTH.md) token as parameter.


# Endpoints

## [1. Update PAN](PAN.md#1-update-pan)


### [1. Update PAN](#1-update-pan)

```http
POST /api/V1/forms/pan_update
```

| Parameter           | Type      | Description                                  |
|:--------------------|:----------|:---------------------------------------------|
| `policy_no`         | `string`  | **Required**.                                |
| `dob`               | `string`  | **Required**.                                |
| `pan_no`            | `string`  | **Required**.                                |
| `token`             | `string`  | **Required**. valid google recaptcha token   |

#### Request

```javascript
{
    "policy_no": "906611",
    "dob": "12/10/2001",
    "pan_no": "23333",
    "token": "49458490",
    "client_id": "aaaa"
}
```

#### Response

```javascript
{
    "success": true,
    "data": {
        "ClientId": "",
        "PolicyNo": "906611",
        "TransactionId": "10332805",
        "Status": "Success",
        "Remark": "Case update successfully."
    },
    "status": 200
}
```