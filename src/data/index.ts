
export interface Card {
  id: string;
  description: string;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
}

export async function getCards(): Promise<Card[]> {
  const cards = await (await import("./cards.json")).default;
  return cards;
}

export async function getTransactions(cardId: string): Promise<Transaction[]> {
  const transactions: Record<string, Transaction[]> = await (
    await import("./transactions.json")
  ).default;

  if (transactions[cardId]) {
    return transactions[cardId];
  }

  throw new Error("cardId not found");
}
