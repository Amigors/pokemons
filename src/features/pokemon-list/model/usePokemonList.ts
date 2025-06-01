import { useGetPokemonByNameQuery } from "@/services/pokemon";
import { useState } from "react";

export const usePokemonList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data, error, isLoading } = useGetPokemonByNameQuery("");

  const totalItems = data?.results.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = data?.results.slice(startIndex, endIndex) || [];

  const handlePageChange = (newPage: number) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
  };

  return {
    currentPage,
    itemsPerPage,
    setItemsPerPage,
    currentItems,
    totalItems,
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
    error,
    isLoading,
  };
};
