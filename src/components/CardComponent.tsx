/*  The card component makes it possible to the user to choose 
between business or private card */

import React, { useEffect, useState } from "react";
import { Card, getCards } from "../data";

import styled from "styled-components";
import { getBackgroundColor } from "../utils";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CardBody = styled.div<CardBodyProps>`
  width: 300px;
  height: 175px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${(props) => props.$cardColor};
  border: ${(props) => (props.$isSelected ? "2px solid black" : "none")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface CardBodyProps {
  $cardColor: string;
  $isSelected: boolean;
}

interface CardComponentProps {
  selectedCard?: Card;
  setSelectedCard: (card: Card) => unknown;
}

const CardComponent: React.FC<CardComponentProps> = ({
  setSelectedCard,
  selectedCard,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setLoading(true);
    getCards().then((cards) => {
      setCards(cards);
      if (cards.length > 0) {
        setSelectedCard(cards[0]);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <p>Loading cards...</p>}
      <CardContainer>
        {!loading &&
          cards.map((card) => (
            <CardBody
              onClick={() => setSelectedCard(card)}
              key={card.id}
              $cardColor={getBackgroundColor(card)}
              $isSelected={selectedCard?.id === card.id}
            >
              <p>{card.description}</p>
              <p>{card.id}</p>
            </CardBody>
          ))}
      </CardContainer>
    </div>
  );
};

export default CardComponent;
