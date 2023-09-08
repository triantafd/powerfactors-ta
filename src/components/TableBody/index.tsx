import React from 'react';
import { ICharacter } from 'services/disneyService';
import { ITableColumnConfig } from 'conf/charactersTableData';
import { TableRow } from 'components/TableRow';


interface TableRowProps {
  onClick: (row: ICharacter) => void,
  columns: ITableColumnConfig[];
  sortedCharacters: ICharacter[]
}

const TableBody: React.FC<TableRowProps> = ({ onClick, columns, sortedCharacters }) => {
  return (
    <tbody>
      {sortedCharacters.length > 0 && sortedCharacters.map(character => (
        <TableRow
          key={character._id}
          row={character}
          onClick={() => onClick(character)}
          columns={columns}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
