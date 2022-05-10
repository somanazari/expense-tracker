import { useEffect, useState } from "react";

const TransActionsList = (props) => {
  const [searched, setSearched] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(
    props.transactions
  );

  const changeHandler = (e) => {
    setSearched(e.target.value);
    filterHandler(e.target.value);
  };

  // when props.transactions updated, filterHandler should be run
  useEffect(() => {
    filterHandler(searched);
  }, [props.transactions]);

  const filterHandler = (search) => {
    if (!search || search === "") {
      setFilteredTransactions(props.transactions);
      return;
    }
    // this filter should excecute on ((props.transactions))
    // because just with this way the searched list always is up to date
    let filtered = props.transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="transactionsList">
      {props.transactions.length > 0 ? (
        <input
          type="text"
          placeholder="Search For Transaction"
          value={searched}
          onChange={changeHandler}
        />
      ) : (
        <h3 style={{ textAlign: "center" }}>please add your transaction</h3>
      )}
      <div className="list">
        {filteredTransactions.map((transaction) => {
          return (
            <div
              style={{ border_color: "green" }}
              className={`transactionItem ${
                transaction.type === "expense" && "redborder"
              }`}
              key={transaction.id}
            >
              <span>{transaction.desc}</span>
              <span>{transaction.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransActionsList;
