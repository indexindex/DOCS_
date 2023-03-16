// Advanced Arrays

// usual array
const array = [1, 2, 10, 16];

// multiply numbers from array with foreach
const double = [] // will store the multiplied value
const newArray = array.forEach((num) => {
    //num * 2; // we just multiplied number by 2 but did not store it anywhere
    double.push(num * 2);
})

newArray; // doing same thing as mapArray
// return value = undefined

// after const double, now the return value is =
// (4) [2, 4, 20, 32]

//------------------------------------------//

// map, filter, reduce (most important methods, always return value)

//------------------------------------------//

// MAP (always need to return something)
const mapArray = array.map((num) => { // array is defined earlier
    return num * 2
});
// it runs like this: takes the number, multiplies by 2 and stores the value in mapArray
// so when you call mapArray, it will have those values inside

mapArray; // doing same thing as newArray

// return value = (4) [2, 4, 20, 32]

// if we have one parameter then we can skip closing brackets and
// shorten the code a bit

const mapArray = array.map(num => num * 2);
mapArray;

//------------------------------------------//

// FILTER

const filterArray = array.filter(num => { // num goes through each number and checks the condition
    return num > 5 // returns only values that are greater than 5
})

// short form
const filterArray = array.filter(num => num > 5);

filterArray; // return value = (2) [10, 16]

//------------------------------------------//

// REDUCE

// accumulator = something where we can store the information that happens in the body of the function

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num // accumulator example: 0 + 1 = 1, now if 2 comes, then 1 + 2 = 3
}, 0); // 0 is defined to be value for accumulator

reduceArray;
// return value = 29 (10 + 16 = 26 + 3 = 29)

//------------------------------------------//

// EXERCISE

// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
        
    let newArray = []
    array.forEach(user => {
        let { username } = user;
        username = username + "!";
        newArray.push(username);    
    })
    
    newArray;
  
  //Create an array using map that has all the usernames with a "?" to each of the usernames

    const mapArray = array.map(user => {
        let { username } = user;
        return username + "?";
    });

    mapArray;
  
  //Filter the array to only include users who are on team: red

    const filterArray = array.filter(team => {
        return team.team === "red";
    })

    filterArray;
  
  //Find out the total score of all users using reduce

    const reduceArray = array.reduce((accumulator, score) => {
        return accumulator + score.score
    }, 0);

    reduceArray;



  // (1), what is the value of i? = INDEX of the array

  // (2), Make this map function pure:

  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })

    // (2), Make this map function pure: (SOLUTION)

    const arrayNum = [1, 2, 4, 5, 8, 9];
    const newArray = arrayNum.map((num, i) => {
        return num * 2;
    })

  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.

  const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})

answer;