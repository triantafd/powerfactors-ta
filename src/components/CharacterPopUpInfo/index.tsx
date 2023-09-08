// Type Definitions
import { ICharacter } from '../../services/disneyService';

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
export default CharacterPopUpInfo