import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="balance">
        <div>Balance: {income - expense}$</div>
        <button
          className={isShow ? "cancel" : ""}
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          setIsShow={setIsShow}
          addTransaction={addTransaction}
        />
      )}
      <div className="expense_income">
        <div>
          Expense
          <span style={{ color: "red" }}>{expense}$</span>
        </div>
        <div>
          Income
          <span>{income}$</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
