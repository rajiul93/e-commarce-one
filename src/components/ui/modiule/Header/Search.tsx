"use client";

import { IoSearch } from "react-icons/io5";
import { useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type SearchProps = {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  onSearch?: (query: string) => void;
};

type FormValues = {
  query: string;
};

const Search = ({
  placeholder = "Search products...",
  defaultValue = "",
  className = "",
  onSearch,
}: SearchProps) => {
  const inputId = useId();
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { query: defaultValue },
  });

  const onSubmit: SubmitHandler<FormValues> = ({ query }) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    if (onSearch) onSearch(trimmed);
    router.push(`/product?search=${encodeURIComponent(trimmed)}`) 
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit(onSubmit)}
      className={`mx-auto w-2/3 max-w-lg flex sticky items-center gap-2 rounded-full border bg-white/70 backdrop-blur px-3 py-1 md:py-1.5 transition-shadow focus-within:ring-2 focus-within:ring-primary/60 ${className}`}
    >
      <label htmlFor={inputId} className="sr-only">
        Search
      </label>
      <input
        id={inputId}
        {...register("query")}
        className="flex-1 bg-transparent outline-none text-sm sm:text-base placeholder:text-gray-400"
        type="search"
        enterKeyHint="search"
        autoComplete="off"
        placeholder={placeholder}
        aria-label="Search"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="inline-flex items-center justify-center rounded-full bg-primary text-white w-6 h-6 sm:w-9 sm:h-9 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
      >
        <IoSearch className="text-lg sm:text-xl" />
      </button>
    </form>
  );
};

export default Search;
