
# Introduction

These endpoints need jwt token to be passed on header.
These endpoints need [google recaptcha V3](AUTH.md) token as parameter.


# Endpoints

## [1. SMS](PAN.md#1-update-pan)


### [1. SMS](#1-update-pan)

```http
POST /api/V1/forms/otp
```

| Parameter | Type      | Description                                  |
|:----------|:----------|:---------------------------------------------|
| `mobile`  | `string`  | **Required**.                                |
| `type`    | `string`  | **Required**.                                |
| `token`   | `string`  | **Required**. valid google recaptcha token   |

`type` values should be as follows:

Grievance = `grievance`
Join Us = `join_us`
Contact Us = `contact_us`
Become an Agent = `agent`
Customer Login = `login`
Do not disturb = `dnd`
Business Partner = `partner`
Product = `product`
Join Our Team = `join_team`
Newsletter = `newsletter`
COI Download= `download_certificate`

#### Request

```javascript
{
    "mobile": "1234567890",
    "token": "12345"
}
```

#### Response

```javascript
{
    "success": true,
    "data": {
    "ClientId": "",
        "PolicyNo": "123456",
        "TransactionId": "123456",
        "Status": "Success",
        "Remark": "657",
        "otp": "346657"
    },
    "status": 200
}
```

### [2. SMS Verify](#2-verify-otp)

```http
POST /api/V1/forms/otp_validate
```

| Parameter | Type      | Description                                  |
|:----------|:----------|:---------------------------------------------|
| `mobile`  | `string`  | **Required**.                                |
| `type`    | `string`  | **Required**.                                |
| `otp`     | `string`  | **Required**.                                |
| `token`   | `string`  | **Required**. valid google recaptcha token   |

`type` values should be as follows:

Grievance = `grievance`
Join Us = `join_us`
Contact Us = `contact_us`
Become an Agent = `agent`
Customer Login = `login`
Do not disturb = `dnd`
Business Partner = `partner`
Product = `product`
Join Our Team = `join_team`
Newsletter = `newsletter`
COI Download= `download_certificate`

#### Request

```javascript
{
    "mobile": "1234567890", 
    "otp": "1234",
    "type": "download_certificate",
    "token": "12345"
}
```

#### Response

```javascript
{
    "success": true,
    "data": {},
    "status": 200
}
```