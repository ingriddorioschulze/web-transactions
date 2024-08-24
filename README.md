# Transactions Page

## About

A transaction page was built where user can see theirs transactions based on private and/or business cards.

## Implementation details

- TransactionsPage holds the CardComponent and the TransactionComponent rendering a selectedCard. With the help of the selectedCard state, the TransactionComponent will be rendered just if a card is selected.

- In the CardComponent, business and private cards are displayed. To display the transactions of a card, the first card of the cards array is displayed as default. The selected card is shown with a black border to make it easier to the user to identify which card is selected.

- The TransactionComponent shows the transactions based on the card the user selected and offers. The functionality of filtering transactions by the amount is implemented. The filteredTransactions was done with a useMemo to improve a bit the performance. Since the rerender of a component is not always predictable, the idea was to prevent unnecessary execution of the filter operation when the inputs did not change. To allow the user to see all transactions when they don't enter any value, a special handling for the empty string was added where an empty string is interpreted as 0.


## ToDos and Improvements

- Responsive design 
- Filter transaction by description
- Check testing warnings
- Add more test assertions

## Technologies

- Typescript
- React
- styled components
- React Testing Library

## Instructions

### Running application

1. Clone repository

```bash
git clone https://github.com/ingriddorioschulze/web-transactions
cd web-transactions
```

2.  Install dependencies

```bash
yarn install
```

3. Start

```bash
yarn start
```

### Running unit tests

```bash
yarn test
```

with :yellow_heart: by [Ingrid do Rio Schulze](https://github.com/ingriddorioschulze)