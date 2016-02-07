precedence
===

Precedence AND and OR operations for JavaScript.

Usage
---

**OR**:

```javascript
var or = require('precedence').or
console.log(or(null, false, undefined, 5, 10)) // => 5
console.log(or(null, "0", 5)) // => "0"
console.log(or(null, 0, 5)) // => 0
```

**AND**:

```javascript
var and = require('precedence').and
console.log(and(null, false, undefined, 5, 10)) // => false
console.log(and(null, "0", 5)) // => false
console.log(and(null, 0, 5)) // => false
console.log(and(0, false)) // => false
```

License
---

MIT
