// AJAX is a technology, a method of combining pieces together to create small updates on webpage without it fully reloading the whole page;
// AJAX is used for single page building which is popular trend now;
// AJAX destroys old data blocks on page and builds new ones so that the page never needs to refresh completely;

// fetch() is part of windows object (an AJAX call);
// url is JSON object;
// response is basically a promise that waits for value (value will be converted into JS through JSON());

// with fetch() we get "Promise" and promise is saying that it's making a request somewhere over the internet and promises to return the value when found;
// .then... means when we get response we now convert it (so we can use it in JS);
// last .then... means that now after conversion we have the object ready for JS and we want to grab users that will be displayed (we got users object from API);

// React Component example:
componentDidMount() {
    fetch('https://url.com/users')
    .then(response => response.json())
    .then(users => console.log(users));
}