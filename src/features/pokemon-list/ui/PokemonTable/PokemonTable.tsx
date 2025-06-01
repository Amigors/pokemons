import { PokemonTableRow } from "./PokemonTableRow";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PokemonTableProps = {
  items: Array<{ name: string; url: string }>;
};

export const PokemonTable = ({ items }: PokemonTableProps) => (
  <Table>
    <TableCaption>A list of pokemons.</TableCaption>
    <TableHeader className="bg-gray-100">
      <TableRow>
        <TableHead className="w-[100px] font-bold">Name</TableHead>
        <TableHead className="font-bold">Details</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map((pokemon) => (
        <PokemonTableRow
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </TableBody>
  </Table>
);
