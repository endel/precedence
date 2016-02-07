precedence
===

Precedence AND and OR operations for JavaScript.

The problem
---

Since `""`, `0`, `NaN`, and so on, are considered falsy on expression
evaluations, sometimes you might get unexpected results.

**Example:**

```
var value = false || 0 || "" || NaN || 5
console.log(value)
// => 5
```

But, wait, `0` should've been considered a valid value, shouldn't it? WTF JS TYPES

Usage
---

`precedence` tackles this problem by considering only `undefined`, `null`, and
`false` as falsy.

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
