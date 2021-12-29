import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [open, setOpen] = useState(false);

  const addExpenseHandler = (data) => {
    // Special way of assigning data to state dependant on the previous state
    setExpenses((previous) => {
      return [data, ...previous];
    });
  };

  const openModalHandler = () => {
    setOpen(true);
  };
  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <div className="title-wrapper">
          <h1>Expense Tracker</h1>
          <h5 style={{ margin: "-15px" }}>
            <cite>- Where expenses are engineered!</cite>
          </h5>
        </div>
        {!open ? (
          <div className="new-expense__wrapper">
            <button onClick={openModalHandler} className="new-expense__button">
              Add New Expense
            </button>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <div>
        {open ? (
          <NewExpense
            onCancel={closeModalHandler}
            onAddExpense={addExpenseHandler}
          />
        ) : (
          <p></p>
        )}
        <Expenses items={expenses} />
      </div>
    </div>
  );
};

export default App;
