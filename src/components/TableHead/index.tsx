/** @format */
import { ITableColumnConfig } from "../../conf/charactersTableData";
import { ICharacter } from "../../services/disneyService";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterListIcon from '@mui/icons-material/FilterList';
import { SortedByState } from "../../utils/sortingUtils";

interface TableHeadProps {
  columns: ITableColumnConfig[];
  onSort?: (field: keyof ICharacter) => void;
  sortingModel: SortedByState<ICharacter>;
}

const TableHead: React.FC<TableHeadProps> = ({ columns, onSort, sortingModel }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.field}
            className="whitespace-nowrap overflow-hidden truncate h-10 border-r border-gray-300 w-36 last:border-r-0"
          >
            {column.displayName}
            {column.sortable && (
              <>
                {!!(
                  sortingModel.find((sort) => sort.field === column.field)
                    ?.direction === "asc"
                ) ? (
                  <ArrowUpwardIcon
                    onClick={() => onSort && onSort(column.field)}
                  />
                ) : (
                  <ArrowDownwardIcon
                    onClick={() => onSort && onSort(column.field)}
                  />
                )}
              </>
            )}
            {/* {column.filterable && (
              <FilterListIcon
                onClick={() => onSort && onSort(column.field)}
              />
            )} */}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
