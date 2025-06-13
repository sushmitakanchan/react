import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const Course =(props)=>{
    console.log(props);
    
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.cost),
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
                React.createElement(Course, {
                    name: "Javascript",
                    cost: "1000"
                }),
                React.createElement(Course, {
                    name: "Python",
                    cost: "1000"
                }),
                React.createElement(Course, {
                    name: "Rust",
                    cost: "1000"
                }),
                React.createElement(Course, {
                    name: "Java",
                    cost: "1000"
                })
                
            ]
        )
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
