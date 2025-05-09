import { render, screen } from "@testing-library/react";
import AssetList from "../AssetList";

describe("AssetList", () => {
  it("renders asset names", () => {
    const assets = [
      { id: "1", name: "AlphaBot", type: "Humanoid" },
      { id: "2", name: "BetaBot", type: "Industrial" },
    ];
    render(<AssetList assets={assets} />);
    expect(screen.getByText("AlphaBot")).toBeInTheDocument();
    expect(screen.getByText("BetaBot")).toBeInTheDocument();
  });
});
