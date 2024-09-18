import React from 'react';
import { ArrowIcon, DropdownContainer, DropdownWrapper, Select } from './styled/DropdownStyled';

interface DropdownSelectorProps {
  label?: string;
  options: { value: number | string; label: string }[];
  selectedValue: number | string;
  onChange: (value: number | string) => void;
  size?: 'small' | 'medium';
  center?: boolean;
  extraMargin?: boolean; 
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  size = 'medium',
  center = false,
  extraMargin = false,
}) => {
  return (
    <DropdownContainer size={size} center={center} extraMargin={extraMargin}>
      <DropdownWrapper>
        <Select
          size={size}
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <ArrowIcon
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.57742 6.07745C3.90286 5.75201 4.4305 5.75201 4.75593 6.07745L10 11.3215L15.2441 6.07745C15.5695 5.75201 16.0972 5.75201 16.4226 6.07745C16.748 6.40289 16.748 6.93053 16.4226 7.25596L10.5893 13.0893C10.2638 13.4147 9.73619 13.4147 9.41075 13.0893L3.57742 7.25596C3.25198 6.93053 3.25198 6.40289 3.57742 6.07745Z"
            fill="#1D242B"
          />
        </ArrowIcon>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default DropdownSelector;
