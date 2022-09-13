This is a entity-base queryable in-memory database.

## Example HTTP request body


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
