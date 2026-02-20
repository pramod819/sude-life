
# Introduction

Endpoints to generate token for subsequent calls.

## 1. Google Recaptcha Token

This have to be created by using google API. Please create a captcha using the below URL.

https://www.google.com/recaptcha/admin/create

You have to add both backend and front end domains to access this Captcha.
Please check the below documentation for more details.

https://developers.google.com/recaptcha/docs/v3

Once ReCaptcha has been created we will get site key and secret key from google admin console.
Please use site key for front end and secret key for backend.

Front end should use https://classic.yarnpkg.com/en/package/next-recaptcha-v3 for integrating google captcha.

## 2. Create JWT Token

```http
POST /api/V1/auth/local
```

| Parameter    |   Type   | Description    |
|:-------------|:---------|:---------------|
| `identifier` | `string` | **Required**.  |
| `password`   | `string` | **Required**.  |

#### Request

```javascript
{
    "identifier": string,
    "password": string,
}
```

#### Response

```javascript
{
    "jwt": string,
    "user": {
        "id": number,
        "documentId": string,
        "username": string,
        "email": string,
        "provider": string,
        "confirmed": boolean,
        "blocked": boolean,
        "createdAt": string,
        "updatedAt": string,
        "publishedAt": string
    }
}
```