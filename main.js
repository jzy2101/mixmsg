// // Defining random array for 3 elements
// let randArray = []
// randArray[1] = Math.floor(Math.random())
// randArray[2] = Math.floor(Math.random())
// randArray[3] = Math.floor(Math.random())

// Defining 3 lists of items to be input for the mixed message.
const msgArray = [];
msgArray[0] = ['A', 'B', 'C'];
msgArray[1] = [1, 2, 3];
msgArray[2] = ['a', 'b', 'c'];
// console.log(msgArray);

// Define message function
const generateMsg = () => {
    let msg = [];
    for (i = 0; i < msgArray.length; i++) {
        msg.push(msgArray[i][Math.floor(Math.random() * msgArray[i].length)])
    };
    return 'Your ' + msg[0] + ' will be ' + msg[1] + ' at ' + msg[2] +'.';
};

console.log(generateMsg())