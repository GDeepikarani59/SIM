import { assets } from "../data/assets";

export default function AssetDetail({ assetId }: { assetId: string }) {
  const asset = assets.find((a) => a.id === assetId);

  if (!asset) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-600">
        🚫 Asset not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          {asset.name}
        </h1>
        <p className="text-lg text-gray-500">{asset.type} Robot</p>
      </header>

      {/* Product Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Product Information
        </h2>
        <p className="text-gray-600">{asset.productInfo}</p>
      </section>

      {/* Repair Instructions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Repair Instructions
        </h2>
        <p className="text-gray-600">{asset.repairInstructions}</p>
      </section>

      {/* Bill of Materials */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Bill of Materials
        </h2>
        <ul className="list-disc pl-6 text-gray-600">
          {asset.billOfMaterials.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CAD Model Link */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">CAD Model</h2>
        <a
          href={asset.cadModelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          View CAD Model
        </a>
      </section>
    </div>
  );
}
