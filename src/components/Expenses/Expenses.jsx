import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const filterHandler = (year) => {
    setYear(year);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onFilter={filterHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
