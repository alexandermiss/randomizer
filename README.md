# Randomizer
Generates codes


## Installation
```sh
npm install @intmainreturn/randomizer --save
```


## Methods

#### `Randomizer.number([Number: length])`
```js
// Optional, default: 5
```

#### `Randomizer.code([Number: length])`
```js
// Optional, default: 6
```
#### `Randomizer.serial([Number: characters], [Number: length])`
```js
// Optional, default: characters 4, length 5
```

#### `Randomizer.hex([Number: length])`
```js
// Optional, default: 6
```


## Node.js usage
```js
var randomizer = require('@intmainreturn/randomizer');

randomizer.number()
// SMS Verification: 21050

randomizer.code()
// Temporal password: XEWERZ

randomizer.serial()
// Windows serial: 8VQN-W64K-S0O1-IRGU-1W9Z

randomizer.serial(3, 6)
// Youtube TV activation code: E7S-5AA-125-HQA-I8A-WNL
```