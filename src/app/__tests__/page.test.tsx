import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../page";

jest.mock("../../components/SearchBar", () => ({
  __esModule: true,
  default: ({
    setSearchTerm,
  }: {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  }) => (
    <input
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search Assets"
      data-testid="search-bar"
    />
  ),
}));

jest.mock("../../components/AssetList", () => ({
  __esModule: true,
  default: ({ assets }: { assets: any[] }) => (
    <ul data-testid="asset-list">
      {assets.map((asset) => (
        <li key={asset.id} data-testid="asset-item">
          {asset.name}
        </li>
      ))}
    </ul>
  ),
}));

describe("HomePage", () => {
  it("does not display assets that do not match the search term", () => {
    render(<HomePage />);

    // Initially, display all assets
    expect(screen.getByText(/AlphaBot/i)).toBeInTheDocument();
    expect(screen.getByText(/BetaDroid/i)).toBeInTheDocument();

    // Simulate typing a search term that matches "AlphaBot"
    fireEvent.change(screen.getByTestId("search-bar"), {
      target: { value: "AlphaBot" },
    });

    // Now, only "AlphaBot" should be visible
    expect(screen.getByText(/AlphaBot/i)).toBeInTheDocument();
    expect(screen.queryByText(/BetaDroid/i)).toBeNull(); // This should not be in the document

    // Clear the search term
    fireEvent.change(screen.getByTestId("search-bar"), {
      target: { value: "" },
    });

    // After clearing the search term, both assets should be visible again
    expect(screen.getByText(/AlphaBot/i)).toBeInTheDocument();
    expect(screen.getByText(/BetaDroid/i)).toBeInTheDocument();
  });
});
