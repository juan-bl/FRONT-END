const x = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]

for (c in x) {
    console.log(x[c])

    if (c == 0) {
        x[c] = [0, 0, 0]
    }
}

console.log(x);
