define({ "api": [
  {
    "type": "post",
    "url": "/vpn/getpayment",
    "title": "To get payment of vpn service",
    "name": "GetVPNPayment",
    "group": "Sentinel_Tendermint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>Amount to send VPN node.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session-id",
            "description": "<p>session-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counter",
            "description": "<p>Counter value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chain-id",
            "description": "<p>chain-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Account name of client.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gas",
            "description": "<p>gas value.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isfinal",
            "description": "<p>is this final signature or not.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Signature",
            "description": "<p>VerificationFailed signature verification failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SignatureFailed-Response:",
          "content": "{\n  success: false,\n  message: 'Signature varification is faild.'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  message: 'Payment done successfully'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/service.go",
    "groupTitle": "Sentinel_Tendermint"
  },
  {
    "type": "post",
    "url": "/refund",
    "title": "To Refund the balance of client.",
    "name": "Refund",
    "group": "Sentinel_Tendermint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>AccountName of the client.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session-id",
            "description": "<p>session-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chain-id",
            "description": "<p>chain-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gas",
            "description": "<p>Gas value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressInvalid",
            "description": "<p>Address is not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddressInvalid-Response:",
          "content": "{\n  success: false,\n  message: 'Address is not associated with this SessionId'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  message: 'Balance added Successfully'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/service.go",
    "groupTitle": "Sentinel_Tendermint"
  },
  {
    "type": "delete",
    "url": "/master",
    "title": "To Delete Master Node.",
    "name": "deleteMasterNode",
    "group": "Sentinel_Tendermint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of Master Node which we want to delete.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>AccountName of the person who is deleting the Master node.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chain-id",
            "description": "<p>chain-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gas",
            "description": "<p>Gas value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountNotExists",
            "description": "<p>Master Node not exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AccountNotExists-Response:",
          "content": "{\n  success: false,\n  message: 'Account is not exist..'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  message: 'Account is deleted successfully'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/service.go",
    "groupTitle": "Sentinel_Tendermint"
  },
  {
    "type": "delete",
    "url": "/vpn",
    "title": "To Delete VPN Node.",
    "name": "deleteVpnNode",
    "group": "Sentinel_Tendermint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of VPN Node which we want to delete.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>AccountName of the person who is deleting the VPN node.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chain-id",
            "description": "<p>chain-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gas",
            "description": "<p>Gas value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountNotExists",
            "description": "<p>VPN Node not exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AccountNotExists-Response:",
          "content": "{\n  success: false,\n  message: 'Account is not exist..'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  message: 'Account is deleted successfully'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/service.go",
    "groupTitle": "Sentinel_Tendermint"
  },
  {
    "type": "post",
    "url": "/vpn/pay",
    "title": "To Pay for VPN service.",
    "name": "payVPN_service",
    "group": "Sentinel_Tendermint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coins",
            "description": "<p>Amount to pay for vpn service.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vaddress",
            "description": "<p>Address of the vpn service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Account name of Client</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chain-id",
            "description": "<p>chain-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gas",
            "description": "<p>Gas value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountNotExists",
            "description": "<p>VPN Node not exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AccountNotExists-Response:",
          "content": "{\n  success: false,\n  message: 'VPN address  is not registered..'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  message: 'Payment done successfully'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/service.go",
    "groupTitle": "Sentinel_Tendermint"
  },
  {
    "type": "post",
    "url": "/register/master",
    "title": "To register Master Node.",
    "name": "registerMasterNode",
    "group": "Sentinel_Tendermint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Account name of Master Node.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chain-id",
            "description": "<p>chain-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gas",
            "description": "<p>Gas value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountAlreadyExists",
            "description": "<p>Master Node already exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AccountAlreadyExists-Response:",
          "content": "{\n  success: false,\n  message: 'Account is already registered..'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  message: 'Account is registered successfully'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/service.go",
    "groupTitle": "Sentinel_Tendermint"
  },
  {
    "type": "post",
    "url": "/register/vpn",
    "title": "To register VPN service provider.",
    "name": "registerVPN",
    "group": "Sentinel_Tendermint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>Ip address of VPN service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "netspeed",
            "description": "<p>Net speed of VPN service.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ppgb",
            "description": "<p>Price per GB.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Account name of service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chain-id",
            "description": "<p>chain-id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gas",
            "description": "<p>Gas value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountAlreadyExists",
            "description": "<p>VPN service provider already exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AccountAlreadyExists-Response:",
          "content": "{\n  success: false,\n  message: 'Account is already registered..'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  message: 'Account is registered successfully'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/service.go",
    "groupTitle": "Sentinel_Tendermint"
  }
] });
