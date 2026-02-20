# Endpoints

## [1. Get Fund nav By Filter](FUNDNAV.md#1-get-fundnav-by-filters)<br/><br/>[2. Get Fund nav detials](FUNDNAV.md#2-get-fund-nav-details)<br/><br/>


### [1. Get Fund nav By Filter](#1-get-fundnav-by-filters)

```http
GET /api/v1/content/fund/get_all?fundid=&product=&startdate=&enddate=
```

| Parameter   |   Type   | Description     |
|:------------|:---------|:----------------|
| `fundid`    | `string` | **optional**.   |
| `product`   | `string` | **optional**.   |
| `startdate` | `string` | **optional**.   |
| `enddate`   | `string` | **optional**.   |


#### Request

```javascript
{
    "fundid": string,
    "product": string,
    "startdate": string,
    "enddate": string,
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
                "nav": string,
                "date": string,
                
            }
        ],
    },
    "status": number
}
```

### [2. Get Fund nav detials](#2-get-fund-nav-details)

```http
GET /api/v1/content/fund/details?fundid=
```

| Parameter   |   Type   | Description     |
|:------------|:---------|:----------------|
| `fundid`    | `string` | **optional**.   |


#### Request

```javascript
{
    "fundid": string,
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
                "fund_db": string,
                "color": string,
                "fund_sud": string,
                "SFIN": string,
                "code": string,
                "display_name": string,
                "nav_products": [
                    {
                        "title": string,
                    }
                ]
                
            }
        ],
    },
    "status": number
}
```

### [3. Get Fund nav performance](#3-get-fund-nav-performance)

```http
GET /api/v1/content/fund/performance?fundid=&type=1month
```

| Parameter   |   Type   | Description       |
|:------------|:---------|:------------------|
| `fundid`    | `string` | **optional**.     |
| `product`   | `string` | **optional**.     |
| `type`      | `string` | 1m/1y/3y/5y/52w   |


#### Request

```javascript
{
    "fundid": string,
    "product": string,
    "type": string,
}
```

#### Response

```javascript
{
    "success": boolean,
    "data": {
        "list": [
            {
                "fund": {
                    "id": string
                },
                "max": {
                    "max": {}
                },
                "min": {
                    "min": {}
                }
            }
        ],
    },
    "status": number
}
```
