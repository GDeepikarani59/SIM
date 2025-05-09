import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../Tabs";

const mockProps = {
  productInfo: "AlphaBot is designed for personal assistance.",
  repairInstructions: "1. Unscrew the back panel. 2. Replace battery.",
  billOfMaterials: ["Motor X", "Sensor Y", "Battery Z"],
  cadModelUrl: "https://example.com/cad/alphabot",
};

describe("Tabs Component", () => {
  it("renders all tabs correctly", () => {
    render(<Tabs {...mockProps} />);

    // Check if all tabs are rendered
    expect(screen.getByText("Product Info")).toBeInTheDocument();
    expect(screen.getByText("Repair Instructions")).toBeInTheDocument();
    expect(screen.getByText("Bill of Materials")).toBeInTheDocument();
    expect(screen.getByText("CAD Model")).toBeInTheDocument();
  });

  it("displays Product Info tab content by default", () => {
    render(<Tabs {...mockProps} />);

    // Ensure Product Info is rendered by default
    expect(screen.getByText(mockProps.productInfo)).toBeInTheDocument();
  });

  it("displays Repair Instructions when the corresponding tab is clicked", () => {
    render(<Tabs {...mockProps} />);

    // Click on the Repair Instructions tab
    fireEvent.click(screen.getByText("Repair Instructions"));

    // Ensure Repair Instructions content is displayed
    expect(screen.getByText(mockProps.repairInstructions)).toBeInTheDocument();
  });

  it("displays Bill of Materials when the corresponding tab is clicked", () => {
    render(<Tabs {...mockProps} />);

    // Click on the Bill of Materials tab
    fireEvent.click(screen.getByText("Bill of Materials"));

    // Ensure Bill of Materials list is displayed
    mockProps.billOfMaterials.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("displays CAD Model link when the corresponding tab is clicked", () => {
    render(<Tabs {...mockProps} />);

    // Click on the CAD Model tab
    fireEvent.click(screen.getByText("CAD Model"));

    // Ensure CAD Model link is displayed
    const cadLink = screen.getByText("View CAD Model");
    expect(cadLink).toBeInTheDocument();
    expect(cadLink.getAttribute("href")).toBe(mockProps.cadModelUrl);
  });

  it("switches between tabs correctly", () => {
    render(<Tabs {...mockProps} />);

    // Initially, the content should be for Product Info
    expect(screen.getByText(mockProps.productInfo)).toBeInTheDocument();

    // Click on Repair Instructions tab
    fireEvent.click(screen.getByText("Repair Instructions"));
    expect(screen.getByText(mockProps.repairInstructions)).toBeInTheDocument();

    // Click on Bill of Materials tab
    fireEvent.click(screen.getByText("Bill of Materials"));
    mockProps.billOfMaterials.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    // Click on CAD Model tab
    fireEvent.click(screen.getByText("CAD Model"));
    const cadLink = screen.getByText("View CAD Model");
    expect(cadLink).toBeInTheDocument();
    expect(cadLink.getAttribute("href")).toBe(mockProps.cadModelUrl);
  });
});
