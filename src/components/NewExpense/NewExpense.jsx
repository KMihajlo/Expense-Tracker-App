import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const submitDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitData={submitDataHandler} />
    </div>
  );
};

export default NewExpense;
