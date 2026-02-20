# Introduction

These endpoints will be used in branch locator component


# Endpoints

## [1. Get Locality](BRANCHLOCATOR.md#1-get-locality-by-district)<br/><br/>[2. Get Branch By Locality](BRANCHLOCATOR.md#2-get-branch-by-locality)

### [1. Get Locality](#1-get-locality-by-district)

```http
GET /api/v1/content/branch/get_localities?district=
```

|  Parameter  | Type     |
|:------------|:---------|
|`district`   | `string` |

#### Response

```javascript
{
    "success": bool,
    "data": [
        'locality one',
        'locality two',
    ],
    "status": int
}
```

### [2. Get Branch By Locality](#2-get-branch-by-locality)

```http
GET /api/v1/content/branch/get_by_locality?locality=
```

|  Parameter  | Type     |
|:------------|:---------|
|`locality`   | `string` |

#### Response

```javascript
{
    "success": bool,
    "data": [
        {
            "name": string,
            "slug": string,
            "address": string,
            "locality": string,
            "coordinates": {
                "latitude": string,
                "longitude": string
            },
            "banner": {
                "image": {
                    "desktop": {
                        "alt": string,
                        "title": string,
                        "width": number,
                        "height": number,
                        "url": string
                    },
                    "mobile": {
                        "alt": string,
                        "title": string,
                        "width": number,
                        "height": number,
                        "url": string
                    }
                },
                "title": string,
                "subTitle": string
            },
            "amenities": [
                {
                    "type": string,
                    "text": string
                }
            ]
        }
    ],
    "status": int
}
```