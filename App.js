// const heading = React.createElement('h1', {}, 'Hello World from React');

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

/**
 * <div id='parent'>
 *  <div id='child'>
 *      <h1>I'm h1 tag</h1>
 *  </div>
 * </div>
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { className: "heading" },
      "I am 1 heading inside child and parent div"
    )
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h2",
      { className: "heading" },
      "I am 2 heading inside child and parent div"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
