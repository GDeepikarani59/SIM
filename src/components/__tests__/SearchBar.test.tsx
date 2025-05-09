import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("renders input and updates search term on typing", () => {
    const setSearchTerm = jest.fn();

    render(<SearchBar setSearchTerm={setSearchTerm} />);

    // Check input is rendered
    const input = screen.getByPlaceholderText(/search for a robot asset/i);
    expect(input).toBeInTheDocument();

    // Simulate user typing "AlphaBot"
    fireEvent.change(input, { target: { value: "AlphaBot" } });

    // Check if setSearchTerm was called with "AlphaBot"
    expect(setSearchTerm).toHaveBeenCalledWith("AlphaBot");
  });
});
