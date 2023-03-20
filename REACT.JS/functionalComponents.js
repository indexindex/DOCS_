

// ! Pure functions
// always returns same result
// result should always depend on props passed in,
// we should never get back a value that is depending on smth else
const pureFunc = (a, b) => {
    return a + b;
}



// ! sideeffect
// is when a function creates somekind of effect outsid eof its scope



// ! impure functions
// reverse of pure functions, impure functions produce sideeffects








// setstate is only for classes, we need to use useState
// useState is a hook,

import { useState } from 'react';

// usestate returns an array of 2 items -> value and setvalue
const [] = useState;

// each hook is applied for one value





// functional component runs entirely from top to bottom every time we need to rerender a component






// for fetch calls, we need to use sideeffect hook, 
import { useEffect } from 'react';
// takes 2 arguments, 1st callback, 2nd array of dependencies (state values)

// runs immediately with first run then only when state values change they trigger callback
// array can be left empty so it only ever runs once, for example with fetch