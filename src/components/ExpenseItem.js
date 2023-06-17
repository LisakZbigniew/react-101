import { Component } from "react";
import "./ExpenseItem.css";

class ExpenseItem extends Component {
    constructor({ expense }) {
        super({ expense: expense });
        this.expense = expense;
    }

    render() {
        return (
            <div className="expense-item">
                <div>{this.expense.date.toLocaleString("en-GB")}</div>
                <div className="expense-item__description">
                    <h2>{this.expense.title}</h2>
                    <div className="expense-item__price">
                        {this.expense.price}
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpenseItem;
