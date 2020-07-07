# cascade-assessment

A simple api built to demonstrate my mastery of javascript and node.js in a RESTful API context

## Getting Started

---

1. clone from repo
2. install dependancies with `npm install`
3. run `knex migrate:latest`
4. run `knex seed:run`
5. run server with `npm start`
6. test out the endpoints

---

## Register New User

---

**HTTP Method: [POST]**

**URL: /api/auth/register**

Schema:

| Name         |  Type  | Required |    description     |
| ------------ | :----: | :------: | :----------------: |
| email        | string |   yes    |    unique email    |
| password     | string |   yes    |      password      |
| phone_number |  int   |   yes    | format: ########## |

_example_

```
{
	"email": "testing12345@test.com",
	"password": "ThisPasswordSucks",
	"phone_number": "7029454922"
}
```

_The returned object will be:_

```
{
  "message": "Successfully registered with testing12345@test.com"
}
```

---

## Returning User Login

---

**HTTP Method: [POST]**

**URL: /api/auth/login**

Schema:

| Name         |  Type  | Required |    description     |
| ------------ | :----: | :------: | :----------------: |
| email        | string |   yes    |    unique email    |
| password     | string |   yes    |      password      |
| phone_number |  int   |    no    | format: ########## |

_example_

```
{
	"email": "testing12345@test.com",
	"password": "ThisPasswordSucks"
}
```

_the returned object will be:_

```
{
  "message": "Welcome back testing12345@test.com!"
}
```

---

## Get all failed login events

---

**HTTP Method: [GET]**

**URL: /api/events/failed-login**

_the returned object will be:_

```
[
  {
    "id": 4,
    "type": "LOGIN",
    "description": "Failure",
    "user_id": 1,
    "created_at": "2020-07-05"
  },
  {
    "id": 6,
    "type": "LOGIN",
    "description": "Failure",
    "user_id": 3,
    "created_at": "2020-07-05"
  },
  {
    "id": 7,
    "type": "LOGIN",
    "description": "Failure",
    "user_id": 2,
    "created_at": "2020-06-23"
  },
  {
    "id": 12,
    "type": "LOGIN",
    "description": "Failure",
    "user_id": 4,
    "created_at": "2020-07-07"
  }
]
```

---

## Get All Events from Two Days Ago

---

**HTTP Method: [GET]**

**URL: /api/events/two-days-ago**

_the returned object will be:_

```
[
  {
    "id": 4,
    "type": "LOGIN",
    "description": "Failure",
    "user_id": 1,
    "created_at": "2020-07-05"
  },
  {
    "id": 6,
    "type": "LOGIN",
    "description": "Failure",
    "user_id": 3,
    "created_at": "2020-07-05"
  }
]
```

## Get All Events from a Week Ago

---

**HTTP Method: [GET]**

**URL: /api/events/last-week**

_the returned object will be:_

```
[
  {
    "id": 1,
    "type": "LOGIN",
    "description": "Successful",
    "user_id": 1,
    "created_at": "2020-07-07"
  },
  {
    "id": 2,
    "type": "LOGIN",
    "description": "Successful",
    "user_id": 2,
    "created_at": "2020-07-07"
  },
  {
    "id": 3,
    "type": "LOGIN",
    "description": "Successful",
    "user_id": 3,
    "created_at": "2020-07-07"
  },
  {
    "id": 4,
    "type": "LOGIN",
    "description": "Failure",
    "user_id": 1,
    "created_at": "2020-07-05"
  },
  {
    "id": 5,
    "type": "LOGIN",
    "description": "Successful",
    "user_id": 1,
    "created_at": "2020-07-07"
  },
	{MANY MORE}
]
```
