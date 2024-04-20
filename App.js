const heading = React.createElement(
  "h1",
  { id: "heading", className: "head" },
  "Hello World fro React"
);
console.log(typeof heading); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "I am an h1 tag"),
    React.createElement("h1", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "I am an h1 tag"),
    React.createElement("h1", {}, "I am an h2 tag"),
  ])
]
  
);
root.render(parent);
