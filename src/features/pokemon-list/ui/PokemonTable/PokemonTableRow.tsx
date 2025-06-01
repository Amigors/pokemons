import { TableCell, TableRow } from "@/components/ui/table";

type PokemonTableRowProps = {
  name: string;
  url: string;
};

export const PokemonTableRow = ({ name, url }: PokemonTableRowProps) => (
  <TableRow>
    <TableCell className="font-medium capitalize">{name}</TableCell>
    <TableCell>
      <a
        href={url}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Details
      </a>
    </TableCell>
  </TableRow>
);
