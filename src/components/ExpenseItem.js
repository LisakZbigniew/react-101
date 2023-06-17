import { Component } from "react";

class ExpenseItem extends Component{
    render(){
        return (
            <div>
                <div>Date</div>
                <div>
                    <h2>Expense Title</h2>
                    <div>
                        <div>Amount</div>
                        <div>Type</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpenseItem;