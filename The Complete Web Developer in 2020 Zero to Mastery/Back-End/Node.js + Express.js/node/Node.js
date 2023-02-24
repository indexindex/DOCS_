// Node.js is JavaScript that has it's own V8 engine and can run outside of browsers;
// Node.js is mostly popular for building servers (used widely in back-end);
// to check for Node.js you can simply type in your terminal: node -v;
// and whenever i type 'node' in my terminal, my prompt will change to '>';

// i can do:
> console.log('hi')
// i get: hi

// i can do:
> 4+5
// i get: 9

// i can do:
> Boolean(3)
// i get: true

// Node comes with own properties and things;
// when we run node, we don't have window object anymore (because we don't have browser);
// instead node uses something else, called 'global';
// NB! we also don't have document anymore;

> global // properties of Node.js

> process // is for: what i'm running right now?

> process.exit() // i exit the process and i'm back in my terminal;