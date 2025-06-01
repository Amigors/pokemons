import {
  usePokemonList,
  PokemonTable,
  Pagination,
  ItemsPerPageSelect,
  LoadingState,
  ErrorState,
} from "@/features/pokemon-list";

export function App() {
  const {
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
  } = usePokemonList();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pokémon List</h1>
        <ItemsPerPageSelect
          value={itemsPerPage}
          onChange={(value) => {
            setItemsPerPage(value);
            handlePageChange(1);
          }}
        />
      </div>

      <div className="border rounded-lg overflow-hidden">
        <PokemonTable items={currentItems} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        startIndex={startIndex}
        endIndex={endIndex}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
