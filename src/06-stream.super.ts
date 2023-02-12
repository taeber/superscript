const main = () => {
    const users = [
        {
            givenName: "Jane",
            surname: "Doe",
            role: "Teacher",
        },
        {
            givenName: "James",
            surname: "Bond",
            role: "Libraray",
        },
        {
            givenName: "Jackie",
            surname: "O",
            role: "Astronaut",
        },
    ]

    console.log(
        users
            .map(fullname)
            .map(reversed)
    )
}

const fullname = (user: { surname: string; givenName: string }) => (
    {
        ...user,
        fullname: `${user.surname.toUpperCase()} ${user.givenName}`,
    }
)

const reversed = (user: { fullname: string }) => (
    {
        ...user,
        reversed: user.fullname.split('').reverse().join(''),
    }
)

export default {
    main
}