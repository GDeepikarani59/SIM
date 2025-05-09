"use client";
import Link from "next/link";

interface Asset {
  id: string;
  name: string;
  type: string;
}

interface AssetListProps {
  assets: Asset[];
}

const AssetList = ({ assets }: AssetListProps) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <ul className="space-y-4">
        {assets.length === 0 ? (
          <p className="text-xl text-gray-500">No assets found.</p>
        ) : (
          assets.map((asset) => (
            <li
              key={asset.id}
              className="bg-white p-6 rounded-lg border border-gray-300 shadow-md"
            >
              <div className="flex items-center justify-between">
                {/* Left: Name */}
                <div className="w-1/3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {asset.name}
                  </h3>
                </div>

                {/* Middle: Type */}
                <p className="w-1/3 text-gray-600 text-center">
                  {asset.type} Robot
                </p>

                {/* Right: Link */}
                <div className="w-1/3 text-right">
                  <Link
                    href={`/${asset.id}`}
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AssetList;
