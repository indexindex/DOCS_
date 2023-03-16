// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const { tiger, ...rest } = animals;

tiger// returns value 23
rest // returns value {lion: 5, monkey: 2}

//in ES6 we could do this like so:
const array = [1,2,3,4,5];
function sum (a, b, c, d, e) {
    return a + b + c + d + e;
}

sum(...array);
// return value 15

// same as doing:
sum(1,2,3,4,5)
// return value 15



const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, ...rest } = animals;

objectSpread(tiger, rest);
// return value one is 23
// return value two is {lion: 5, monkey: 2}


// next new feature in ES9 is called finally();
// finally() will run no matter what;
// finally() is usually empty, it has () inside as a parameter;
// taking this Promise as an example further on:
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
  })).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
    console.log(results[3])
  }).catch(() => console.log('error'))

// finally()
  const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  
  Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
  })).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
    console.log(results[3])
  }).catch(() => console.log('error'))
  .finally(() => console.log('extra'));

  // finally() get's executed even if there's an error, we will still get 'extra' shown as a string.



  // last feature of ES9 is 'for await of';
  // loop through async calls:
  const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholdeTYPO.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
  ]
  
  // async example:
  const getData = async function() {
      try {
      const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
          const response = await fetch(url);
          return response.json();
      }));
      console.log('users', users);
      console.log('posta', posts);
      console.log('albums', albums);
    } catch (error) {
      console.log('oooooops', error);
    }
  }
  
getData();

//  for of loop example to remember:
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholdeTYPO.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const loopThroughUrls = urls => {
        for (urls of urls) {
        console.log(urls)
    }
}

loopThroughUrls(urls)

//  for await of allows us to loop through multiple promises:
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholdeTYPO.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// for await of example:
const getData2 = async function() {
    // creating an array of fecth promises of each one of the requests in urls array
    const arrayOfPromises = urls.map(url => fetch(url));
    // loop through each of the request/promise
    for await (let request of arrayOfPromises) {
        // extract data from eaach request
        const data = await request.json();
        // display data
        console.log(data);
    }
}

getData2();