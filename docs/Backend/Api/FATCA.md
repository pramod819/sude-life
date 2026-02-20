
# Introduction

These endpoints need jwt token to be passed on header.
These endpoints need [google recaptcha V3](AUTH.md) token as parameter.


# Endpoints

## [1. Update FATCA](PAN.md#1-update-pan)


### [1. Update FATCA](#1-update-pan)

```http
POST /api/V1/forms/fatca
```

| Parameter                         | Type      | Description                                |
|:----------------------------------|:----------|:-------------------------------------------|
| `policy_no`                       | `string`  | **Required**.                              |
| `dob`                             | `string`  | **Required**.                              |
| `pan_no`                          | `string`  | **Required**.                              |
| `client_id`                       | `string`  | **Required**.                              |
| `name`                            | `string`  | **Required**.                              |
| `outside_resident`                | `boolean` | **Required**.                              |
| `outside_tax`                     | `boolean` | **Required**.                              |
| `outside_curr_address`            | `boolean` | **Required**.                              |
| `outside_perm_address`            | `boolean` | **Required**.                              |
| `outside_phone`                   | `boolean` | **Required**.                              |
| `outside_authority`               | `boolean` | **Required**.                              |
| `outside_curr_authority`          | `boolean` | **Required**.                              |
| `outside_instruction`             | `boolean` | **Required**.                              |
| `privacy`                         | `boolean` | **Required**.                              |
| `curr_authority_date`             | `string`  | **Required**.                              |
| `father_name`                     | `string`  | **Required**.                              |
| `birth_place`                     | `string`  | **Required**.                              |
| `birth_country`                   | `string`  | **Required**.                              |
| `token`                           | `string`  | **Required**. valid google recaptcha token |

#### Request

```javascript
{
    "policy_no": "97887",
    "dob": "12/04/1999",
    "client_id":"122222",
    "name":"Murphy",
    "outside_resident": true,
    "outside_tax": true,
    "outside_curr_address": false,
    "outside_perm_address": true,
    "outside_phone": false,
    "outside_authority": true,
    "outside_curr_authority": true,
    "outside_instruction": false,
    "privacy": true,
    "curr_authority_date": "01/02/2025",
    "father_name": "John",
    "birth_place": "Canada",
    "birth_country": "Canada",
    "token": "12345"
}
```

#### Response

```javascript
{
    "success": true,
    "data": {
        "ref": "1234"
    },
    "status": 200
}
```