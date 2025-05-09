"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { assets } from "../../data/assets";
import Tabs from "../../components/Tabs";

const AssetDetailPage = () => {
  const params = useParams();
  const assetId = params.assetId as string;

  const asset = assets.find((asset) => asset.id === assetId);

  if (!asset) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold text-[#702844]">
        🚫 Asset not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
        <h1 className="text-4xl font-bold text-gray-700 tracking-tight leading-tight">
          {asset.name}
        </h1>
        <p className="text-md text-gray-700 italic">{asset.type} Robot</p>

        <div className="mb-6 flex justify-center">
          <Image
            src="/robo.png"
            alt="Robo"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>

        <Tabs
          productInfo={asset.productInfo}
          repairInstructions={asset.repairInstructions}
          billOfMaterials={asset.billOfMaterials}
          cadModelUrl={asset.cadModelUrl}
        />
      </div>
    </div>
  );
};

export default AssetDetailPage;
