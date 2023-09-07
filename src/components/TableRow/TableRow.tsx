import React from 'react';
import { ICharacter } from '../../services/disneyService';
import { ITableColumnConfig } from '../../conf/charactersTableData';


interface TableRowProps {
  row: ICharacter;
  onClick: () => void,
  columns: ITableColumnConfig[];
}

const TableRow: React.FC<TableRowProps> = ({ row, onClick, columns }) => {
  return (
    <tr key={row._id} onClick={onClick}>
      {columns.map(column => (
        <td key={`${column.field}-${row._id}`}>
          {column.render ? column.render(row) : row[column.field]}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
