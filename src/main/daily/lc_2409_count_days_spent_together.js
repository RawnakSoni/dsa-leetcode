countDaysTogether = function (
    arriveAlice,
    leaveAlice,
    arriveBob,
    leaveBob
) {
    const toDay = (date) => {
        const [month, day] = date.split("-").map(Number)
        const daysInMonth = [
            31, 28, 31, 30, 31, 30,
            31, 31, 30, 31, 30, 31
        ]

        let total = day

        for (let i = 0; i < month - 1; i++) {
            total += daysInMonth[i]
        }

        return total
    }

    const start = Math.max(
        toDay(arriveAlice),
        toDay(arriveBob)
    )

    const end = Math.min(
        toDay(leaveAlice),
        toDay(leaveBob)
    )

    return Math.max(0, end - start + 1)
}

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"))