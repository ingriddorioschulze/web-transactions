import { Card } from "./data";

export const getBackgroundColor = (card:Card): string => {
    switch (card.description) {
      case "Private Card":
        return "#ebebeb";
      case "Business Card":
        return "#cdeafd";
      default:
        return "#a2bead";
    }
  };