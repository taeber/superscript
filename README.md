SuperScript
===========

SuperScript is a subset of JavaScript with TypeScript's syntax for a subset of
types.
_So why not call it SubScript? It was taken._

There are:

 + No classes
 + No semi-colons
 + Everything is defined as `const NAME = SOME_VALUE`
   + Which means only big arrow functions `() => {...}`
   - I do mean `const`. No `var`. No `let`.
 + No `async`/`await`
 + No exceptions
   + OK to return `new Error`
   - No `throws`, `try`, `catch`, `finally`
 + The only form of imports allowed is: `import defaultExport from "path/to/module"`
 + Exports restricted to `export default {...}` at the end of a file
 + Type information is required
   - Except when returning `void`
   - Or if it's obvious
   - There's no need for `const i: number = 10`

Recommended:

 + Restrict names to `[a-zA-Z0-9]`. No underscores, no dollar signs, no emojis.
 + Prefer "temporary variables" to inlining (except in string templates)
 + Is it too late to add a pipe operator to TypeScript?

Interoperability

As the language is a subset of TypeScript, it 


**Filename Extension**

Until a proper translator is written, use the filename extensions `.super.js` or
`.super.ts` if needed.

If a translator that actually understands the language, please use `.jss`
"JavaScript Super".

Never use `.ss`!


## See Also

 * [eslint-plugin-functional](https://github.com/eslint-functional/eslint-plugin-functional/)
