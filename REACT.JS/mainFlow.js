// TODO: COMPONENT RUN ORDER (MAIN FLOW)

/*
   * "React" executes "constructor" first because
   * classes always start with them.
   * "render" runs next and contains "HTML" template 
   * for the page to render. "render" also mounts our
   * initial "state".
   * After our "render" mounts the "UI", we run lifecycle method
   * next, for example "componentDidMount". This lifecycle method
   * runs as soon as our component has been mounted to page.

   * Also we should keep in mind that declaring anonymous function
   * inside a "render" component is decreasing performance.
   * If we have an element in "JSX" that has an event listener,
   * we should not write the function inside of that listener but instead 
   * declare that function logic outside of "render" and only
   * reference that function through our event listener on "JSX".

   * Every self made component should be capitalized starting with first letter.
   * When making a component "JSX", it can only contain one top-level parent,
   * one "<div>" for example that contains all of it's content. We can not have
   * multiple same-level elements.
*/