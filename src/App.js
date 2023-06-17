import React, { Component } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

class App extends Component {
    render() {
        const expenses = [
            { id: 0, title: "Matress", price: 800.99, date: Date.now() },
            { id: 1, title: "Areopress", price: 99.99, date: Date.now() },
            { id: 2, title: "Coffee", price: 80.0, date: Date.now() },
        ];

        return (
            <div>
                <h1>Hello hi !</h1>
                <div>
                    <ExpenseItem expense={expenses[0]} />
                    <ExpenseItem expense={expenses[1]} />
                    <ExpenseItem expense={expenses[2]} />
                </div>
            </div>
        );
    }
}

export default App;
