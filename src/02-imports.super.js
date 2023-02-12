import hello from "./01-hello.super"

const main = () => {
    console.log("hello.main says:")
    hello.main()
}

export default {
    main
}