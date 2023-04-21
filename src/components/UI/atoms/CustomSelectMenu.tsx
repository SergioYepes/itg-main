import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FormattedMessage } from "react-intl";

interface Option {
  value: string;
  id: string;
  link: string;
}

interface DropdownProps {
  options: Option[];
}

const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    const deactivateNavBar = document.querySelector('.menu__navigation--active');
    deactivateNavBar?.classList.remove("menu__navigation--active")
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <FormattedMessage id={selectedOption.id}>
            {(message) => <p> {message} </p>}
          </FormattedMessage>
        ) : (
          <FormattedMessage id="header-about">
            {(message) => <p> {message} </p>}
          </FormattedMessage>
        )}
        <MdArrowDropDown className="dropdown__icon" />
      </button>
      {isOpen && (
        <div className="dropdown__menu--container">
          <div className="dropdown__menu">
            {options.map((option) => (
              <a href={`/${option.link}`}>
                <FormattedMessage id={option.id}>
                  {(message) => (
                    <button
                      key={option.value}
                      className="dropdown__menu-item"
                      onClick={() => handleOptionClick(option)}
                    >
                      {message}
                    </button>
                  )}
                </FormattedMessage>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
