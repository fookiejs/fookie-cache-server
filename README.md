This is a entity-base queryable in-memory database.

## Example HTTP request bodies.



### Create Model
```Javascript
{
    token: "your-system-token"
    method: "create"
    model:"model",
    mixin: []
    body:{
        name:"user",
        database:"store",
        schema:{
            name:{
                type: "string",
                required: true
            },
             surname:{
                type: "string",
                required: true
            },
        }
        lifecycle:{
            create:{
                role: ["system"]
            },
             read:{
                role: ["system"]
            },
             delete:{
                role: ["system"]
            },
             update:{
                role: ["system"]
            },
            count:{
                role: ["system"]
            },
        }
    }
}
```

### Create an entity
```Javascript
{
    token: "your-system-token"
    method: "user"
    method:"create",
    body:{
        name:"John",
        surname: "Doe",
    },
    options:{
        drop: 5000 // delete entity after 5 sec
    }
}
```

### Read a list with query
```Javascript
{
    token: "your-system-token"
    method: "user"
    method:"create",
    query:{
        filter:{
            name: "Jonh"
        }
    },
}
```

### Update with query
```Javascript
{
    token: "your-system-token"
    method: "user"
    method:"delete",
    query:{
        filter:{
            name:{
                $eq:"Jonh"
            }
        }
    },
    body:{
        name:"Alexa"
    }
}
```

### Delete with query
```Javascript
{
    token: "your-system-token"
    method: "user"
    method:"delete",
    query:{
        filter:{
            name:{
                $eq:"Jonh"
            }
        }
    },
}
```
