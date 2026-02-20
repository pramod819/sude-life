
# Introduction

These endpoints is a public api


# Endpoints

## [1. Autocomplete](SEARCH.md#1-autocomplete)<br/><br/>[2. Search ](SEARCH.md#2-search)<br/><br/>


### [1. Autocomplete](SEARCH.md#1-autocomplete)

```http
GET /api/v1/autocomplete?q=
```

| Parameter | Type     | Description |
|:----------|:---------|:------------|
| `q`       | `string` |             |

#### Request

```javascript
{
    "q": string
}
```

#### Response

```javascript
{
    "success": bool,
    "data": string[],
    "status": int
}
```

### [2. Search ](SEARCH.md#2-search)

```http
GET /api/v1/search?page=&pageSize=&q=
```

| Parameter  |   Type   | Description   |
|:-----------|:---------|:--------------|
| `q`        | `string` | **Required**. |
| `page`     | `string` |               |
| `pageSize` | `string` |               |

#### Request

```javascript
{
    "q": string,
    "page": string,
    "pageSize": string
}
```

#### Response

```javascript
{
    "success": bool,
    "data": {
        "list": [
            {
                "title": string,
                "description": string,
                "path": string,
                "createdAt": string,
                "updatedAt": string,
                "publishedAt": string,
            }
        ],
        "pagination": {
            "page": int,
            "pageSize": int,
            "total": int,
            "pageCount": int
        }
    },
    "status": int
}
```