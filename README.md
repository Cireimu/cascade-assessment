# cascade-assessment

A simple api built to demonstrate my mastery of javascript and node.js in a RESTful API context

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
