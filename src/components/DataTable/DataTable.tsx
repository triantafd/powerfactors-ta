import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ICharacter } from '../../services/disneyService';
import Pagination from '../Pagination';
import { fetchCharacters } from '../../store/actions/characterActions';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../store/store';
import { multiLevelSort, SortedByState } from '../../utils/sortingUtils';
import { disneyCharacterColumns } from '../../conf/charactersTableData';
import TableHead from '../TableHead';
import Table from '../Table';
import TableBody from '../TableBody';
import PieChart from '../PieChart';
import CustomModal from '../CustomModal';
import { debounce } from '../../utils/debounce';

import './DataTable.css';
import { CustomLoadingSpinner } from '../Spinner';

const DataTable = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { characters, info, error, loading } = useSelector((state: RootState) => state.characters);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tvShowFilter, setTvShowFilter] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [sortedCharacters, setSortedCharacters] = useState<ICharacter[]>(characters);
  const [sortingModel, setSortingModel] = useState<SortedByState<ICharacter>>([]);
  const [trigger, setTrigger] = useState(0);
  const [trigger2, setTrigger2] = useState(0);

  const debounceFunc = useRef(debounce(() => {
    setTrigger(prevTrigger => prevTrigger + 1);
  }, 1000)).current;

  useEffect(() => {
    dispatch(fetchCharacters(currentPage, pageSize, searchQuery, tvShowFilter));
    setTrigger2((prev) => prev + 1)
  }, [dispatch, currentPage, pageSize, trigger]);
  console.log(trigger2)
  useEffect(() => {
    setSortedCharacters(characters);
  }, [characters]);


  const sortData = useCallback((field: keyof ICharacter) => {
    const existingSort = sortingModel.find((sort) => sort.field === field);

    const updatedSort: SortedByState<ICharacter> = existingSort
      ? sortingModel.map(sortItem =>
        sortItem.field === field
          ? { ...sortItem, direction: sortItem.direction === 'asc' ? 'desc' : 'asc' }
          : sortItem
      )
      : [{ field, direction: 'asc' }, ...sortingModel];

    setSortingModel(updatedSort);

    const sorted = multiLevelSort(sortedCharacters, updatedSort);
    setSortedCharacters(sorted);
  }, [sortingModel, sortedCharacters]);

  const tableRowHandler = (value: ICharacter | null) => setSelectedCharacter(value)

  if (loading) {
    return <CustomLoadingSpinner />
  } else if (error) {
    return <div>error</div>
  } else {
    return (
      <div className='flex w-full'>
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center px-4 sm:px-6 lg:px-8 my-10">
            <div className="w-10/12">

              <CustomModal
                isModalVisible={selectedCharacter}
                setModalVisible={() => setSelectedCharacter(null)}
              >
                {selectedCharacter &&
                  <div className='flex flex-col items-center justify-center '>
                    <h2 className='text-black font-semibold'>{selectedCharacter.name}</h2>
                    <img src={selectedCharacter.imageUrl} alt={selectedCharacter.name} />
                    <div>
                      <strong>TV Shows:</strong> {selectedCharacter.tvShows.join(', ')}
                    </div>
                    <div>
                      <strong>Video Games:</strong> {selectedCharacter.videoGames.join(', ')}
                    </div>
                  </div>
                }
              </CustomModal>

              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 space-y-4 lg:space-y-0">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
                  onClick={() => setModalVisible(true)}
                >
                  Show Pie Chart
                </button>

                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-2 lg:mt-0">
                  <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      debounceFunc()
                    }}
                    className="border p-2 rounded w-full lg:w-40"
                  />
                  <input
                    type="text"
                    placeholder="Search by TV Show"
                    value={tvShowFilter}
                    onChange={(e) => {
                      setTvShowFilter(e.target.value)
                      debounceFunc()
                    }}
                    className="border p-2 rounded w-full lg:w-40"
                  />
                </div>
              </div>

              <CustomModal
                isModalVisible={isModalVisible}
                setModalVisible={() => setModalVisible(false)}
              >
                <PieChart
                  data={characters}
                  getName={character => character.name}
                  getValue={character => character.tvShows.length}
                />
              </CustomModal>
              <Table>
                <TableHead
                  onSort={sortData}
                  columns={disneyCharacterColumns}
                  sortingModel={sortingModel}
                />
                <TableBody
                  onClick={tableRowHandler}
                  columns={disneyCharacterColumns}
                  sortedCharacters={sortedCharacters}
                />
              </Table>
            </div>
            <div className='flex w-10/12 mt-4'>
              <Pagination
                pageSize={pageSize}
                setPageSize={setPageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                info={info}
              />
            </div>
          </div >
        </div>
      </div>
    );
  };
}

export default DataTable;
