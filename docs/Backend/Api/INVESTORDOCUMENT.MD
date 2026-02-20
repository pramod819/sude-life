
# Introduction

These endpoints is a public api 


# Endpoints

## [1. Get Investor Document List](INVESTORDOCUMENT.md#1-get-investor-document-list)<br/><br/>[2. Get Investor Factsheet List](INVESTORDOCUMENT.md#2-get-investor-factsheet)<br/><br/>


### [1.Get Investor Document List](#1-get-investor-document-list)

```http
GET /api/v1/content/investor_document
```

| Parameter       |   Type   | Description                              |
|:----------------|:---------|:-----------------------------------------|
| `category`                 | `number` | **Required**.                 |
| `year`                     | `string` | **optional**.                 |
| `quarter`                  | `string` | **optional**.                 |

#### Request

```javascript
{
    "category": 1,
    "year": '2024-2025',
    "quarter": 'quarter1',
}
```

#### Response

```javascript
{
    "success": true,
    "data": [
        {
            "document_name": "fs",
            "id": 3,
            "file_path": "/uploads/dummy_4cb3c23ca9.pdf"
        }
    ],
    "status": 200
}
```

### [2.Get Investor Factsheet List](#2-get-investor-document-list)

```http
GET /api/v1/content/investor_factsheet?year=2025&month=march
```

| Parameter       |   Type   | Description                              |
|:----------------|:---------|:-----------------------------------------|
| `year`                     | `number` | **Required**.                 |
| `month`                    | `string` | **optional**.                 |
#### Request

```javascript
{
    "year": '2025',
    "month": 'march',
}
```

#### Response

```javascript
{
    "success": true,
    "data": [
        {
            "document_name": "Document1",
            "id": 2,
            "file_path": "/uploads/01_Intimation_under_Regulation_51_2_cessation_of_CFO_01042023_1f9d04f7ab_1_fceef765a6.pdf"
        },
        {
            "document_name": "Document2",
            "id": 4,
            "file_path": "/uploads/01_Intimation_under_Regulation_51_2_cessation_of_CFO_01042023_1f9d04f7ab_1_fceef765a6.pdf"
        }
    ],
    "status": 200
}
```

