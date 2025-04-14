export const skemapost = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "job": {
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "createdAt": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "job",
      "id",
      "createdAt"
    ]
  }

  export const registpost = {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "token": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "token"
    ]
  }

  export const skemaget = {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer"
      },
      "per_page": {
        "type": "integer"
      },
      "total": {
        "type": "integer"
      },
      "total_pages": {
        "type": "integer"
      },
      "data": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "email": {
                "type": "string"
              },
              "first_name": {
                "type": "string"
              },
              "last_name": {
                "type": "string"
              },
              "avatar": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "email",
              "first_name",
              "last_name",
              "avatar"
            ]
          },
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "email": {
                "type": "string"
              },
              "first_name": {
                "type": "string"
              },
              "last_name": {
                "type": "string"
              },
              "avatar": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "email",
              "first_name",
              "last_name",
              "avatar"
            ]
          },
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "email": {
                "type": "string"
              },
              "first_name": {
                "type": "string"
              },
              "last_name": {
                "type": "string"
              },
              "avatar": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "email",
              "first_name",
              "last_name",
              "avatar"
            ]
          },
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "email": {
                "type": "string"
              },
              "first_name": {
                "type": "string"
              },
              "last_name": {
                "type": "string"
              },
              "avatar": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "email",
              "first_name",
              "last_name",
              "avatar"
            ]
          },
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "email": {
                "type": "string"
              },
              "first_name": {
                "type": "string"
              },
              "last_name": {
                "type": "string"
              },
              "avatar": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "email",
              "first_name",
              "last_name",
              "avatar"
            ]
          },
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "email": {
                "type": "string"
              },
              "first_name": {
                "type": "string"
              },
              "last_name": {
                "type": "string"
              },
              "avatar": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "email",
              "first_name",
              "last_name",
              "avatar"
            ]
          }
        ]
      },
      "support": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "text": {
            "type": "string"
          }
        },
        "required": [
          "url",
          "text"
        ]
      }
    },
    "required": [
      "page",
      "per_page",
      "total",
      "total_pages",
      "data",
      "support"
    ]
  }
  
  export const getSingleUser = {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "email": {
            "type": "string"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "avatar": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "email",
          "first_name",
          "last_name",
          "avatar"
        ]
      },
      "support": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "text": {
            "type": "string"
          }
        },
        "required": [
          "url",
          "text"
        ]
      }
    },
    "required": [
      "data",
      "support"
    ]
  }