## How to Setup project for nodejs?

`npm init -y`
-y is used to by default importing packages

> - package.json :- info about dependency
> - package.lock.json :- complete dependency

### Nodemon:-

node project get automatically updated

```
npm i nodemon
```

### dependency VS dev-dependency:

> - dependency: dependency required in production
> - dev-dependency: dependency required in development [npm i nodemon --save-dev]

## Modules:-

> three types

1. core modules(inbuilt modules): fs,http,path
2. third party modules
3. user defined modules

> [1]- core modules(inbuilt modules): fs,http,path ::--

```fs.readFile("./demo.txt", (err, data) => { //--> two arguments for error and data if the file has data or not
if (err) console.log(err);
else console.log(data);
});
```

> [2]- third party modules:
> npm i

> [3]- Userdefined modules:

readline:-
name,email,password
