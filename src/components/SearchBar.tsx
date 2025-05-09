"use client";

interface SearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  return (
    <div className="mb-6 relative">
      <input
        type="text"
        className="border-2 border-gray-300 p-3 pl-5 pr-4 rounded-lg w-full focus:outline-none focus:ring-0 focus:border-gray-400"
        placeholder="Search for a robot asset..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
