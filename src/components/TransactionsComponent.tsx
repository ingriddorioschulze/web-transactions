/*  The transaction component displays the transactions according to 
the selected card and filter the results based on the amount*/

import React, { useEffect, useMemo, useState } from "react";
import { Card, getTransactions, Transaction } from "../data";

import styled from "styled-components";
import { getBackgroundColor } from "../utils";

const AmountFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const AmountFilterInput = styled.input`
  width: 870px;
  height: 30px;
`;

const AmountFilterLabel = styled.label`
  font-weight: bold;
`;

const TransactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 30px;
`;

const TransactionBody = styled.div<TransactionBodyProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 875px;
  height: 100px;
  border-radius: 5px;
  background-color: ${(props) => props.$cardColor};
  border: 1px solid ${(props) => props.$cardColor};
`;

interface TransactionBodyProps {
  $cardColor: string;
}

interface TransactionComponentProps {
  selectedCard: Card;
}

const TransactionComponent: React.FC<TransactionComponentProps> = ({
  selectedCard,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [amountFilter, setAmountFilter] = useState("");

  useEffect(() => {
    setLoading(true);
    getTransactions(selectedCard.id).then((transactions) => {
      setTransactions(transactions);
      setLoading(false);
    });
    setAmountFilter("");
  }, [selectedCard]);

  const filteredTransactions = useMemo(() => {
    let filter = 0;
    if (amountFilter !== "") {
      filter = parseFloat(amountFilter);
    }
    return transactions.filter((transaction) => transaction.amount >= filter);
  }, [transactions, amountFilter]);

  return (
    <div>
      {loading && <p>Loading transactions...</p>}
      <AmountFilterContainer>
        <AmountFilterLabel htmlFor="amount">Amount filter</AmountFilterLabel>
        <AmountFilterInput
          id="amount"
          type="number"
          step="0.01"
          value={amountFilter}
          onChange={(e) => setAmountFilter(e.target.value)}
          placeholder="Filter amount (e.g. 194.00)"
        />
      </AmountFilterContainer>
      <TransactionContainer>
        {!loading &&
          filteredTransactions.map((transaction) => (
            <TransactionBody
              key={transaction.id}
              $cardColor={getBackgroundColor(selectedCard)}
            >
              <p>{transaction.description}</p>
              <p>{transaction.amount}</p>
            </TransactionBody>
          ))}
      </TransactionContainer>
    </div>
  );
};

export default TransactionComponent;
