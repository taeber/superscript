interface Abser {
    abs: () => number
}

interface Stringer {
    toString: () => string
}

const main = () => {
    const float = FloatingPoint(-2)
    console.log(`abs(${float}) = ${float.abs()}`)
    console.log(Number(float))
}

const FloatingPoint = (val: number): Abser & Stringer => {
    // Note: val.toString accepts an optional radix()
    // eslint-disable-next-line functional/prefer-tacit
    const toString = () => val.toString()
    const abs = () => val < 0 ? -val : val
    return {
        abs,
        toString,
    }
}

export default {
    main
}
