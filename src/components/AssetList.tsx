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
import { ArrowRightIcon } from "@heroicons/react/24/solid";
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
                <div className="w-1/3 flex justify-end">
                  <Link
                    href={`/${asset.id}`}
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    View Details
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
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
