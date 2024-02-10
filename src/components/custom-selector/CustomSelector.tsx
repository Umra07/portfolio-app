import { FC, useState } from 'react';
// import { useIntl } from 'react-intl';
// import { label } from '../../../utils/label';
// import { useThemeClass } from '../../common/hooks/useThemeClass';
import './CustomSelector.scss';

export interface OptionType {
  name: string;
  value: string;
}

interface LanguageSelectorProps {
  selectedOption?: string;
  options?: OptionType[];
  styles?: string;
  changeSelected: (value: string) => void;
}

export const CustomSelector: FC<LanguageSelectorProps> = ({
  options,
  changeSelected,
  selectedOption,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleOptionClick = (value: string) => {
    setShowMenu(false);
    changeSelected(value);
  };

  return (
    <div className="select__wrapper" onClick={toggleMenu}>
      {selectedOption ? <button className="select__button">{selectedOption}</button> : ''}
      {showMenu ? (
        <ul className={`select ${showMenu ? 'select--active' : ''}`}>
          {options?.map((option) => (
            <li className="select__option" onClick={() => handleOptionClick(option.name)}>
              {option.name}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};
