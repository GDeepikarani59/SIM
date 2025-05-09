import { render, screen } from "@testing-library/react";
import AssetDetail from "../../../components/AssetDetail";
import { assets } from "../../../data/assets";

// Mock the assets data
jest.mock("../../../data/assets", () => ({
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
      name: "BetaBot",
      type: "Industrial",
      productInfo: "BetaBot is designed for industrial use.",
      repairInstructions: "1. Check the motor. 2. Replace the sensor.",
      billOfMaterials: ["Motor A", "Sensor B", "Battery C"],
      cadModelUrl: "https://example.com/cad/betabot",
    },
  ],
}));

describe("AssetDetail Component", () => {
  it("displays asset details when assetId matches", () => {
    // Render the component with a valid assetId
    render(<AssetDetail assetId="1" />);

    // Assertions to check if the correct asset details are displayed
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
    expect(screen.getByText("View CAD Model")).toHaveAttribute(
      "href",
      "https://example.com/cad/alphabot"
    );
  });

  it("displays 'Asset not found' message when assetId does not match", () => {
    // Render the component with a non-existent assetId
    render(<AssetDetail assetId="non-existent-id" />);

    const errorMessage = screen.getByText("🚫 Asset not found");
    expect(errorMessage).toBeInTheDocument();
  });
});
