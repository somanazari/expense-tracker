import { useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
  // const [description, setDescription] = useState("");
  // const [amount, setAmount] = useState(0);
  // const [type, setType] = useState("");
  // هم با روش بالا میشه و هم روش پایین
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    // close the form
    setIsShow(false);
  };

  return (
    <form className="transaction_form" onSubmit={submitHandler}>
      <input
        required
        onChange={changeHandler}
        type="text"
        name="desc"
        value={formValues.desc}
        placeholder="Description"
      />
      <input
        required
        onChange={changeHandler}
        type="number"
        name="amount"
        value={formValues.amount}
        placeholder="Amount"
      />
      <div className="radioBox">
        <div>
          <input
            required
            type="radio"
            name="type"
            onChange={changeHandler}
            value="expense"
            checked={formValues.type === "expense"}
            id="expense"
          />
          <label htmlFor="expense">Expense</label>
        </div>
        <div>
          <input
            required
            type="radio"
            name="type"
            onChange={changeHandler}
            value="income"
            checked={formValues.type === "income"}
            id="income"
          />
          <label htmlFor="income">Income</label>
        </div>
      </div>
      <button type="submit">Add TransAction</button>
    </form>
  );
};

export default TransActionForm;
