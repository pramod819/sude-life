
# Introduction

These endpoints need jwt token on header


# Endpoints

## [1. Rating Save Like](RATING.md#1-rating-save-like)<br/><br/>


### [1. Rating Save Like](#1-rating-save-like)

```http
POST /api/v1/content/product/save_rating
```

| Parameter       |   Type   | Description                                |
|:----------------|:---------|:-------------------------------------------|
| `productId`     | `string` | **Required**.                              |
| `rating`        | `string` | **Required**.                              |

#### Request

```javascript
{
    "productId": string,
    "rating": string
}
```

#### Response

```javascript
{
    "success": boolean,
    "data": {
        "rating": string,
        "users": string,
        "message": string,
    },
    "status": number
    
}
```
