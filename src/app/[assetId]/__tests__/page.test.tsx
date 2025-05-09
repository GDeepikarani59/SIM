import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../../../components/Tabs";

describe("Tabs Component", () => {
  const props = {
    productInfo: "Product Information Content",
    repairInstructions: "Repair Instructions Content",
    billOfMaterials: ["Screw", "Bolt", "Washer"],
    cadModelUrl: "https://example.com/cad-model",
  };

  it("renders Product Info tab by default", () => {
    render(<Tabs {...props} />);
    expect(
      screen.getByText(/Product Information Content/i)
    ).toBeInTheDocument();
  });

  it("renders Repair Instructions when clicked", () => {
    render(<Tabs {...props} />);
    fireEvent.click(screen.getByText(/Repair Instructions/i));
    expect(
      screen.getByText(/Repair Instructions Content/i)
    ).toBeInTheDocument();
  });

  it("renders Bill of Materials list when clicked", () => {
    render(<Tabs {...props} />);
    fireEvent.click(screen.getByText(/Bill of Materials/i));
    props.billOfMaterials.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders CAD Model link when clicked", () => {
    render(<Tabs {...props} />);
    fireEvent.click(screen.getByText(/CAD Model/i));
    const link = screen.getByText(/View CAD Model/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", props.cadModelUrl);
  });
});
