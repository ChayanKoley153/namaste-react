import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => {
    return (
        <h1 className="head" tabIndex="5">
            Namste React using JSX 
        </h1>
    )
}

const HeaderComponent = function () {
    return (
        <div id="container">
            <Title/>
            <h1 className="heading">Namaste React Functional Component</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);