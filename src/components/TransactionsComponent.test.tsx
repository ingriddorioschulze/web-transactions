import { render, screen, waitFor } from "@testing-library/react";
import TransactionsComponent from "./TransactionsComponent";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("renders correct filtered transactions", async () => {
  render(
    <TransactionsComponent
      selectedCard={{ id: "elek-n3lk-4m3lk4", description: "Business Card" }}
    />
  );
  const amountInput = screen.getByLabelText(/Amount filter/i);
   await userEvent.type(amountInput, "20");

  await waitFor(() => {
    expect(screen.getByText("T-Shirt")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Smart Phone")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.queryByText("Chocolate Bar")).not.toBeInTheDocument();
  });
});
