/*  The transactions page is where user lands and is able to filter 
transactions by card
 */

import React, { useState } from "react";
import CardComponent from "../components/CardComponent";
import TransactionComponent from "../components/TransactionsComponent";
import { Card } from "../data";
import styled from "styled-components";

const TransactionsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const TransactionsPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card>();

  return (
    <TransactionsPageContainer>
      <CardComponent
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
      {selectedCard && (
        <TransactionComponent
          selectedCard={selectedCard}
        />
      )}
    </TransactionsPageContainer>
  );
};

export default TransactionsPage;
