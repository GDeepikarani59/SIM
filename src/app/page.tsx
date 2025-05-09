"use client";
import { useState } from "react";
import AssetList from "../components/AssetList";
import SearchBar from "../components/SearchBar";
import { assets } from "../data/assets";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter assets based on search term
  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      {/* Container for better spacing */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading with improved font size and color */}
        <h1 className="text-4xl font-bold text-gray-700 mb-8 tracking-tight leading-tight">
          Robotic Assets
        </h1>

        {/* Search Bar */}
        <div>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>

        {/* Asset List */}
        <div>
          <AssetList assets={filteredAssets} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
