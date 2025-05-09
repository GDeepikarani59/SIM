import { render, screen } from "@testing-library/react";
import AssetDetail from "../AssetDetail";

jest.mock("../../data/assets", () => ({
  assets: [
    {
      id: "1",
      name: "AlphaBot",
      type: "Humanoid",
      productInfo: "AlphaBot is designed for personal assistance.",
      repairInstructions: "1. Unscrew the back panel. 2. Replace battery.",
      billOfMaterials: ["Motor X", "Sensor Y", "Battery Z"],
      cadModelUrl: "https://example.com/cad/alphabot",
    },
    {
      id: "2",
      name: "BetaDroid",
      type: "Industrial",
      productInfo: "BetaDroid is an industrial automation robot.",
      repairInstructions: "1. Check circuit. 2. Update firmware.",
      billOfMaterials: ["Actuator A", "Camera B", "Processor C"],
      cadModelUrl: "https://example.com/cad/betadroid",
    },
  ],
}));

describe("AssetDetail", () => {
  it("displays 'Asset not found' message when assetId does not match", () => {
    render(<AssetDetail assetId="non-existent-id" />);

    const errorMessage = screen.getByText("🚫 Asset not found");
    expect(errorMessage).toBeInTheDocument();
  });
});

describe("AssetDetail", () => {
  it("displays asset details when assetId matches", () => {
    render(<AssetDetail assetId="1" />);

    // Check if the asset details are displayed
    expect(screen.getByText("AlphaBot")).toBeInTheDocument();
    expect(screen.getByText("Humanoid Robot")).toBeInTheDocument();
    expect(
      screen.getByText("AlphaBot is designed for personal assistance.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("1. Unscrew the back panel. 2. Replace battery.")
    ).toBeInTheDocument();
    expect(screen.getByText("Motor X")).toBeInTheDocument();
    expect(screen.getByText("Sensor Y")).toBeInTheDocument();
    expect(screen.getByText("Battery Z")).toBeInTheDocument();
    expect(screen.getByText("View CAD Model")).toBeInTheDocument();
  });
});
