import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const Course =()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Javascript"),
        React.createElement("p", {}, "Python"),
    ]);
}


const App = ()=>{
    return React.createElement(
        "div",
        {},
        React.createElement(
            "h1",
            {},
            [
                React.createElement("h1", {}, "Courses available on Chaicode"),
                React.createElement(Course),
                React.createElement(Course),
                React.createElement(Course),
                React.createElement(Course)
                
            ]
        )
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
