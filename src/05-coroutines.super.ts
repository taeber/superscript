const main = () => {
    say("world")
    say("hello")
}

const say = (s: string, i = 0) => {
    if (i >= 5) {
        return
    }
    console.log(s)
    setTimeout(() => say(s, i+1), Math.random()*100)
}

export default {
    main
}