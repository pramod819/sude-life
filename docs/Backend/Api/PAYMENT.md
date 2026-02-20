
# Introduction

These endpoints need jwt token to be passed on header.
These endpoints need [google recaptcha V3](AUTH.md) token as parameter.


# Endpoints

## [1. PAYMENT](PAYMENT.md#1-payment-enquiry)


### [1. PAYMENT](#1-payment-enquiry)

```http
POST /api/V1/forms/payment
```

| Parameter           | Type      | Description                                  |
|:--------------------|:----------|:---------------------------------------------|
| `policy_no`         | `string`  | **Required**.                                |
| `dob`               | `string`  | **Required**.                                |
| `token`             | `string`  | **Required**. valid google recaptcha token   |

#### Request

```javascript
{
    "policy_no": "906611",
    "dob": "12/10/2001",
    "pan_no": "23333",
    "token": "49458490",
    "client_id": "aaaa"
}
```

#### Response

```javascript
{
    "success": true,
    "data": {
        "ClientId": "123",
        "PolicyNo": "906611",
        "TransactionId": "10332763",
        "Status": "Success",
        "Remark": null,
        "EnquiryPolicy": {
            "Get_Payment_DetailsResult": {
                "PolicyNo": "906611",
                "PanNumber": "",
                "ContractStatus1": "In Force",
                "ContractStatus2": "Premium Paying",
                "FrequencyMode": "Yearly",
                "SumAssured": "500000.00",
                "PolicyTerm": "15",
                "PremiumPayingTerm": "15",
                "RiskCommencementDate": "24/05/2024",
                "PaidtoDate": "24/05/2025",
                "TotalPremiumDue": "45797.00",
                "ExCharges": "0.00",
                "SuspenseAmount": "0.00",
                "ReinstatementFees": "0.00",
                "NetAmountPayable": "45797.00",
                "ClientID": "123",
                "AuthStatus": "Y",
                "ErrorStatus": "1",
                "StatusMsg": "Success"
            },
                "PaymentDetails": {
                    "ResponseCode": "",
                    "ResponseMesage": "",
                    "PaymentURL": "",
                    "Premium_Amount": "",
                    "DueDate": ""
                }
        }
    },
    "status": 200
}
```