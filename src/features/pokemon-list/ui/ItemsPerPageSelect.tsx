type ItemsPerPageSelectProps = {
  value: number;
  onChange: (value: number) => void;
};

export const ItemsPerPageSelect = ({
  value,
  onChange,
}: ItemsPerPageSelectProps) => (
  <div className="flex items-center gap-2">
    <span className="text-sm text-gray-600">Items per page:</span>
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border rounded px-2 py-1 text-sm"
    >
      {[5, 10, 20, 50].map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  </div>
);
