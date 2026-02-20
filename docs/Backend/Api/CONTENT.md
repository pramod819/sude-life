
# Introduction

Deliver page wise content. The data will be structured as components. Each component will have different data structure.

## 1. Get Content

```http
GET {domain}/api/V1/content/page/corp?path=/<Path>
```

| Parameter | Type       | Description                                                                                                                                 |
|:----------|:-----------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| `path`    | `string`   | **Required**. Path from CMS                                                                                                                 |
| `params`  | `string[]` | Values can vary based on requirements. Check [confluence page](https://confluence.ekino.com/display/EKIN/FIITJEE) for more detail |

#### Response

```javascript
{
    "success": bool,
    "data": {
        "app": {
            "imageBasePath": string,
            "language": string
        },
        "info": {
            "path": string,
            "pageTitle": string,
            "metaTags": array
        },
        "components": array
    }
}
```
