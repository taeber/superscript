const main = () => {
    console.log(add(42, 13)) 
}

const add = (x: number, y: number): number => x + y

export default {
    add,
    main,
}