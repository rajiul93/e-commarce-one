"use client";

import { useState, useMemo, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
} from "@tanstack/react-table";
import { TProduct } from "@/type/product.type";
import ProductCard from "@/components/ui/modiule/poductCard";
import { products } from "@/data/products";
import { useSearchParams } from "next/navigation";

const defaultColumns = [
  { accessorKey: "name" },
  { accessorKey: "price" },
  { accessorKey: "category" },
];

export default function Products() {
  const [filterText, setFilterText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [visibleCount, setVisibleCount] = useState(6);  

    const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";

  useEffect(() => {
    if (query) {
      setFilterText(query);
    }
  }, [query]);
 
  const filteredProducts = useMemo(() => {
    const normalizedCategory = categoryFilter?.toString().trim().toLowerCase();

    const byCategory =
      !normalizedCategory || normalizedCategory === "all"
        ? products
        : products.filter(
            (p) => p.category && p.category.toString().trim().toLowerCase() === normalizedCategory
          );

    const bySearch = filterText
      ? byCategory.filter((p) =>
          p.name.toString().toLowerCase().includes(filterText.toLowerCase())
        )
      : byCategory;

    return bySearch;
  }, [categoryFilter, filterText]);

  const columns = useMemo(() => defaultColumns, []);

  const table = useReactTable({
    data: filteredProducts,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const rows = table.getRowModel().rows;
 
  const categories = useMemo(() => {
    const set = new Set(
      products.map((p) => (p.category ? p.category.toString().trim() : ""))
    );
    return ["All", ...Array.from(set).filter(Boolean)];
  }, []);
 
  const handleReset = () => {
    setFilterText("");
    setCategoryFilter("All");
    setSorting([]);
    // setVisibleCount(3);  
  };

  return (
    <div className="flex gap-6 mt-6"> 
      <aside className="w-64  h-fit sticky top-0    p-4 rounded-md shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium mb-1">Filter by name</label>
          <button
            onClick={handleReset}
            className="text-xs border px-2 py-1 rounded bg-primary hover:bg-primary text-white"
          >
            Reset
          </button>
        </div>
        <input
          className="w-full border px-2 py-1 rounded"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search product..."
        />

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <div className="flex gap-2">
            <select
              className="flex-1 border px-2 py-1 rounded"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button
              title="Clear category"
              className="px-3 py-1 border rounded text-sm"
              onClick={() => setCategoryFilter("All")}
            >
              Clear
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Sort by price</label>
          <button
            className="border px-2 py-1 rounded w-full"
            onClick={() =>
              setSorting([{ id: "price", desc: sorting[0]?.desc ? false : true }])
            }
          >
            {sorting[0]?.desc ? " High → Low" : " Low → High"}
          </button>
        </div>
      </aside>

      {/* Products in card view */}
      <main className="flex-1">
        {rows.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-lg">
            কোনো প্রোডাক্ট পাওয়া যায়নি
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {rows.slice(0, visibleCount).map((row) => {
                const product = row.original as TProduct;
                return <ProductCard key={product.name} product={product} />;
              })}
            </div>

            {/* ✅ Load more button */}
            {visibleCount < rows.length && (
              <div className="text-center mt-6">
                <button
                  className="px-4 py-2 border cursor-pointer rounded bg-primary text-white hover:bg-primary/90"
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
