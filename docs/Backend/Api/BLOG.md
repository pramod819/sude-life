
# Introduction

These endpoints need jwt token on header


# Endpoints

## [1. Blog Save Like](BLOG.md#1-blog-save-like)<br/><br/>[2. Blog Save View](BLOG.md#2-blog-save-view)<br/><br/>[3. Get Blogs By Filter](BLOG.md#3-get-blogs-by-filters)<br/><br/>


### [1. Blog Save Like](#1-blog-save-like)

```http
POST /api/v1/content/blog/saveLike
```

| Parameter       |   Type   | Description                                |
|:----------------|:---------|:-------------------------------------------|
| `blogId`        | `string` | **Required**.                              |

#### Request

```javascript
{
    "blogId": string,
}
```

#### Response

```javascript
{
    "success": true,
    "data": true,
    "status": 200
}
```
### [2. Blog Save View](#2-blog-save-view)

```http
POST /api/v1/content/blog/saveView
```

| Parameter       |   Type   | Description                                |
|:----------------|:---------|:-------------------------------------------|
| `blogId`        | `string` | **Required**.                              |

#### Request

```javascript
{
    "blogId": string,
}
```

#### Response

```javascript
{
    "success": true,
    "data": true,
    "status": 200
}
```

### [3. Get Blogs By Filter](#3-get-blogs-by-filters)

This endpoint no need jwt token

```http
GET /api/v1/content/blog/get_all?category=&title=&trending=&orderBy=&direction=&page=
```

| Parameter   |   Type   | Description     |
|:------------|:---------|:----------------|
| `category`  | `string` | **optional**.   |
| `title`     | `string` | **optional**.   |
| `trending`  | `boolean`| **optional**.   |
| `order`     | `string` | **optional**.   |
| `direction` | `string` | **optional**.   |
| `page`      | `number` | **optional**.   |


#### Request

```javascript
{
    "category": string,
    "title": string,
    "trending": boolean,
    "order": string,
    "direction": string,
    "page": number
}
```

#### Response

```javascript
{
    "success": boolean,
    "data": {
        "list": [
            {
                "title": string,
                "path": string,
                "image": ImageObject,
                "blog_category": CategoryObject,
                "short_desc": string,
                "read_time": number,
                "publish_date": string
            }
        ],
        "loadmore": boolean,
        "nextPage": number,
    },
    "status": number
}
```
