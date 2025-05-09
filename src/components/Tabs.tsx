import { useState } from "react";

interface TabsProps {
  productInfo: string;
  repairInstructions: string;
  billOfMaterials: string[];
  cadModelUrl: string;
}

const Tabs = ({
  productInfo,
  repairInstructions,
  billOfMaterials,
  cadModelUrl,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState("productInfo");

  const renderTabContent = () => {
    switch (activeTab) {
      case "productInfo":
        return <div>{productInfo}</div>;
      case "repairInstructions":
        return <div>{repairInstructions}</div>;
      case "billOfMaterials":
        return (
          <ul className="list-disc pl-5 space-y-1">
            {billOfMaterials.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "cadModel":
        return (
          <a
            href={cadModelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            View CAD Model
          </a>
        );
      default:
        return <div>{productInfo}</div>;
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex mb-4 space-x-2">
        <button
          onClick={() => setActiveTab("productInfo")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            activeTab === "productInfo"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Product Info
        </button>
        <button
          onClick={() => setActiveTab("repairInstructions")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            activeTab === "repairInstructions"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Repair Instructions
        </button>
        <button
          onClick={() => setActiveTab("billOfMaterials")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            activeTab === "billOfMaterials"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Bill of Materials
        </button>
        <button
          onClick={() => setActiveTab("cadModel")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            activeTab === "cadModel"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          CAD Model
        </button>
      </div>

      {/* Content */}
      <div className="border p-4 rounded-lg bg-white shadow-sm border border-gray-30">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;
