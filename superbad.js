export function hi(name) {
  var x = "semi-colons are a no-no";
  name = "bob"
  return name
}

export class InheritEverything {
  constructor() {
    this.blows = true
    for (let i = 0; i < 10; i++) {
      i++
    }
    try {
      10/0
    } catch (e) {
      // swallow
    }
  }
}

console.log(x)
console.log("Hi", hi("john"))

