# Backend API Reference :raised_hand:

1. ## [Authentication](AUTH.md) :lock_with_ink_pen:
2. ## [Content](CONTENT.md) :page_with_curl:

---

### HTTP Status Code

| Code  | Description             |
|:------|:------------------------|
| `200` | `OK`                    |
| `404` | `NOT FOUND`             |
| `400` | `BAD REQUEST`           |
| `403` | `ACCESS DENIED`         |
| `422` | `VALIDATION FAILED`     |
| `500` | `INTERNAL SERVER ERROR` |

> ### Suucess Response

```javascript
{
   "success": true,
   "data": {
   }
}
```

> ### Failed Response

```javascript
{
   "success": false,
   "data": {
      "status": integer,
      "message": string
   }
}
```

> ### Validation Failed Response
> Front-end should be validated each forms from their end. Don't depend on API validation

```javascript
{
   "success": false,
   "data": {
      "status": 422,
      "message": string,
      "validation": {
         "contact": {
            "type": string,
            "message": string
         }
      }
   }
}
```

