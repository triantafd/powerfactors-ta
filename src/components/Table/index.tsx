interface ITableProps {
  children: React.ReactNode;
}

const Table: React.FC<ITableProps> = ({ children }) => {
  return (
    <div className="table-container overflow-x-auto overflow-y-auto h-[calc(70vh-50px)]">
      <table className="min-w-full">
        {children}
      </table>
    </div>
  );
};


export default Table;