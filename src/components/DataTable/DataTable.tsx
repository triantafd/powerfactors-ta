// External Packages
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

// React Components
import Pagination from '../Pagination';
import TableHead from '../TableHead';
import Table from '../Table';
import TableBody from '../TableBody';
import PieChart from '../PieChart';
import CustomModal from '../CustomModal';
import { SkeletonLoader } from '../SkeletonLoader';

// State Management (Redux)
import { fetchCharacters } from '../../store/actions/characterActions';
import { RootState } from '../../store/store';

// Type Definitions
import { ICharacter } from '../../services/disneyService';

// Utilities and Configurations
import { multiLevelSort, SortedByState } from '../../utils/sortingUtils';
import { disneyCharacterColumns } from '../../conf/charactersTableData';
import { debounce } from '../../utils/debounce';

// Assets and Styling
import './DataTable.css';



const CharacterPopUpInfo: React.FC<{ selectedCharacter: ICharacter | null }> = ({ selectedCharacter }) => {
  return (
    <>
      {
        selectedCharacter &&
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
    </>
  );
}


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

  if (error) {
    return <div>error</div>
  } else {
    return (
      <div className='flex w-full'>
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center px-4 sm:px-6 lg:px-8 my-10">
            <div className="w-10/12">
              {/* < ----- Selected User PopUp  -----> */}
              <CustomModal
                isModalVisible={selectedCharacter}
                setModalVisible={() => setSelectedCharacter(null)}
              >
                <CharacterPopUpInfo selectedCharacter={selectedCharacter} />
              </CustomModal>


              {/* < ----- Show Pie Button + disney character Fiilter  -----> */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 space-y-4 lg:space-y-0">
                {/* < ----- Show Pie Button   -----> */}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
                  onClick={() => setModalVisible(true)}
                >
                  Show Pie Chart
                </button>

                {/* < -----  Disney character Filters   -----> */}
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


              {/* < ----- Pie Chart  -----> */}
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

              {/* < ----- Table  -----> */}
              <Table>
                <TableHead
                  onSort={sortData}
                  columns={disneyCharacterColumns}
                  sortingModel={sortingModel}
                />
                {loading
                  ? <SkeletonLoader pageSize={pageSize} />
                  : <TableBody
                    onClick={tableRowHandler}
                    columns={disneyCharacterColumns}
                    sortedCharacters={sortedCharacters}
                  />
                }
              </Table>
            </div>

            {/* < ----- PaginationOf Table  -----> */}
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
