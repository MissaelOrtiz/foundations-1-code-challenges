// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let output = {};
    for(let key in someObject) {
        // store the original value
        let value = someObject[key];
        // change the key to uppercase
        let changedKey = key.toUpperCase();
        // change the key within the object to the uppercase and assign its value
        output[changedKey] = value;
    }
    return output;
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return Object.keys(someObject).join('');
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const output = Object.entries(someObject);
    return output;
}

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/