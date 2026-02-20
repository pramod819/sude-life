
# Introduction

These endpoints need jwt token to be passed on header.
These endpoints need [google recaptcha V3](AUTH.md) token as parameter.


# Endpoints

## [1. Contact Us](FORMS.md#1-contact-us)<br/><br/>[2. Do Not Disturb](FORMS.md#2-do-not-disturb)<br/><br/>[3. Become An Agent](FORMS.md#3-become-an-agent)<br/><br/>[4. Join Us](FORMS.md#4-join-us)<br/><br/>
[5. Business Partner](FORMS.md#5-business-partner)<br/><br/>[6. Product Form](FORMS.md#6-product-form)<br/><br/>[7. Newsletter](FORMS.md#7-newsletter)<br/><br/>[8. Join our team](FORMS.md#9-join-our-team)<br/><br/>[9. Join Us Profesional](FORMS.md#10-join-us-profesional)


### [1. Contact Us](#1-contact-us)

```http
POST /api/V1/forms/contact_us
```

| Parameter       |   Type   | Description                                |
|:----------------|:---------|:-------------------------------------------|
| `name`          | `string` | **Required**.                              |
| `subject`       | `string` | **Required**.                              |
| `email`         | `string` | **Required**.                              |
| `mobile`        | `string` | **Required**.                              |
| `message`       | `string` | **Required**.                              |
| `token`         | `string` | **Required**. valid google recaptcha token |

#### Request

```javascript
{
    "name": string,
    "subject": string,
    "email": string,
    "mobile": string,
    "message": string,
    "otp": string,    
    "token": string
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

### [2. Do Not Disturb](#2-do-not-disturb)

```http
POST /api/V1/forms/dnd
```

| Parameter         | Type       | Description                                |
|:------------------|:-----------|:-------------------------------------------|
| `first_name`      | `string`   | **Required**.                              |
| `last_name`       | `string`   | **Required**.                              |
| `mobile`          | `string`   | **Required**.                              |
| `email`           | `string`   | **Required**.                              |
| `landline_number` | `string`   |                                            |
| `pincode`         | `string`   |                                            |
| `state`           | `string`   |                                            |
| `city`            | `string`   |                                            |
| `otp`             | `string`   | **Required**.  OTP from SMS API            |
| `token`           | `string`   | **Required**. valid google recaptcha token |

#### Request

```javascript
{
    "first_name": string,
    "last_name": string,
    "mobile": string,
    "email": string,
    "landline": string,
    "pincode": string,
    "state": string,
    "city": string,
    "otp": string,
    "token": string
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

### [3. Become An Agent](#3-become-an-agent)

```http
POST /api/V1/forms/become_an_agent
```

| Parameter   | Type       | Description                                                 |
|:------------|:-----------|:------------------------------------------------------------|
| `name`      | `string`   | **Required**.                                               |
| `mobile`    | `string`   | **Required**.                                               |
| `source`    | `string`   |                                                             |
| `medium`    | `string`   |                                                             |
| `campaign`  | `string`   |                                                             |
| `content`   | `string`   |                                                             |
| `term`      | `string`   |                                                             |
| `otp`       | `string`   | **Required**.  OTP from SMS API                             |
| `token`     | `string`   | **Required**. valid google recaptcha token                  |

#### Request

```javascript
{
    "name": string,
    "mobile": string,
    "source": string,
    "medium": string,
    "campaign": string,
    "content": string,
    "term": string,
    "otp": string,
    "token": string
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

### [4. Join Us](#4-join-us)

```http
POST /api/V1/forms/join_us
```

| Parameter    |   Type   | Description                                                |
|:-------------|:---------|:-----------------------------------------------------------|
| `first_name` | `string` | **Required**.                                              |
| `last_name`  | `string` | **Required**.                                              |
| `mobile`     | `string` | **Required**.                                              |
| `email`      | `string` | **Required**.                                              |
| `city`       | `string` |                                                            |
| `otp`        | `string` | **Required**.  OTP from SMS API                            |
| `token`      | `string` | **Required**. valid google recaptcha token                 |

#### Request

```javascript
{
    "first_name": string,
    "last_name": string,
    "mobile": string,
    "email": string,
    "city": string,
    "otp": string,
    "token": string
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

### [5. Business Partner](#5-business-partner)

```http
POST /api/V1/forms/business_partner
```

| Parameter   |   Type   | Description                                                  |
|:------------|:---------|:-------------------------------------------------------------|
| `full_name` | `string` | **Required**.                                                |
| `mobile`    | `string` | **Required**.                                                |
| `email`     | `string` | **Required**.                                                |
| `city`      | `string` |                                                              |
| `otp`       | `string` | **Required**.  OTP from SMS API                              |
| `token`     | `string` | **Required**. valid google recaptcha token                   |

#### Request

```javascript
{
    "full_name": string,
    "mobile": string,
    "email": string,
    "city": string,
    "otp": string,
    "token": string
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

### [6. Product Form](FORMS.md#6-product-form)

```http
POST /api/V1/forms/product_form
```

| Parameter            | Type      | Description                                |
|:---------------------|:----------|:-------------------------------------------|
| `first_name`         | `string`  | **Required**.                              |
| `last_name`          | `string`  | **Required**.                              |
| `gender`             | `string`  | **Required**.                              |
| `dob`                | `string`  | **Required**.                              |
| `source`             | `string`  | **Required**.                              |
| `mobile`             | `string`  |                                            |
| `email`              | `string`  |                                            |
| `product_id`         | `string`  |                                            |
| `product_name`       | `string`  |                                            |
| `otp`                | `string`  | **Required**.  OTP from SMS API            |
| `token`              | `string`  | **Required**. valid google recaptcha token |
| `blop_redirection`   | `boolean` |                                            |
| `cc_leads`           | `boolean` |                                            |

#### Request

```javascript
{
    "first_name": string,
    "last_name": string,
    "gender": string,
    "dob": string,
    "mobile": string,
    "email": string,
    "product_id": string,
    "product_name": string,
    "otp": string,
    "token": string,
    "blop_redirection": boolean,
    "cc_leads": boolean,
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

### [7. Newsletter](#7-newsletter)

```http
POST /api/V1/forms/newsletter
```

| Parameter       |   Type   | Description                                |
|:----------------|:---------|:-------------------------------------------|
| `email`         | `string` | **Required**.                              |
| `page`          | `string` | page url where for is submitted            |
| `token`         | `string` | **Required**. valid google recaptcha token |

#### Request

```javascript
{
    "email": string,
    "page": string,
    "token": string
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

### [8. Join our team](#9-join-our-team)

```http
POST /api/V1/forms/join_our_team
```

| Parameter    |   Type   | Description                                                         |
|:-------------|:---------|:--------------------------------------------------------------------|
| `full_name`  | `string` | **Required**.                                                       |
| `mobile`     | `string` | **Required**.                                                       |
| `email`      | `string` | **Required**.                                                       |
| `department` | `string` | **Required**.                                                       |
| `message`    | `string` |                                                                     |
| `resume`     | `string` | **Required**. base64 string. Only pdf, png, jpeg and docx supported |
| `otp`        | `string` | **Required**.  OTP from SMS API                                     |
| `token`      | `string` | **Required**. valid google recaptcha token                          |

#### Request

```javascript
{
    "full_name": string,
    "mobile": string,
    "email": string,
    "department": string,
    "message": string,
    "resume": string, 
    "otp": string,
    "token": string
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

### [9. Join Us Profesional](#10-join-us-profesional)

```http
POST /api/V1/forms/join_us_professional
```

| Parameter        |   Type   | Description                                                        |:--------------------------------------------------------------------------------------------------|
| `first_name`     | `string` |**Required**.                                                       |
| `mobile`         | `string` |**Required**.                                                       |
| `last_name`      | `string` | **Required**.
| `formType`       | `string` |**Required**.                                                       |
| `resume`         | `string` | **Required**. base64 string. Only pdf, png, jpeg and docx supported|
| `token`          | `string` | **Required**. valid google recaptcha token                         |
| `otp`            | `string` | **Required**.  OTP from SMS API                                    |

#### Request

```javascript
{
    "first_name": string,
    "mobile": string,
    "last_name": string,
    "resume": string,
    "token": string
    'formType': string
    "otp": string,
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

### [10. Gift city](#10-gift-city)

```http
POST /api/V1/forms/gift_city
```

| Parameter    |   Type   | Description                                                |
|:-------------|:---------|:-----------------------------------------------------------|
| `first_name` | `string` | **Required**.                                              |
| `last_name`  | `string` | **Required**.                                              |
| `mobile`     | `string` | **Required**.                                              |
| `email`      | `string` | **Required**.                                              |
| `city`       | `string` |                                                            |
| `otp`        | `string` | OTP from SMS API                   |
| `token`      | `string` | **Required**. valid google recaptcha token                 |

#### Request

```javascript
{
    "first_name": string,
    "last_name": string,
    "mobile": string,
    "email": string,
    "city": string,
    "otp": string,
    "token": string
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

### [11. Have an idea](#11-have-an-idea)

```http
POST /api/V1/forms/have_an_idea
```

| Parameter     |   Type   | Description                                |
|:--------------|:---------|:-------------------------------------------|
| `employee_id` | `string` | **Required**.                              |
| `department`  | `string` | **Required**.                              |
| `subject`     | `string` | **Required**.                              |
| `idea`        | `string` | **Required**.                              |
| `token`       | `string` | **Required**. valid google recaptcha token |

#### Request

```javascript
{
    "employee_id": string,
    "department": string, 
    "subject": string,
    "idea": string,
    "token": string
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