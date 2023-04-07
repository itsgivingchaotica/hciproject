import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'
import { Typeahead } from 'react-bootstrap-typeahead';
import styles from './searchBar.module.css';

export function SearchBar(){

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
            <Form.Control
            className=""
                placeholder={neighborhood}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
            />
        </a>
      ));
      
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
      
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
              <Form.Control
                autoFocus
                className="mx-2 my-2 w-auto"
                placeholder="Type to filter..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <ul className="">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value.toLowerCase()),
                )}
              </ul>
            </div>
          );
        },
      );

    const [filterType,setFilterType] = useState(() => {
        const initialType = "near";
        return initialType;
    });

    const [neighborhood,setNeighborhood] = useState(() => {
        const initialType = "Prospect Park";
        return initialType;
    });

    const handleOptionChange = (e) => {
        setFilterType('');
        setFilterType(e.target.value);
    }

    const handleOptionSelect = (eventKey) => {
        setNeighborhood('');
        setNeighborhood(eventKey);
        console.log(eventKey);
    }

    const options = [
        'Bay Ridge',
        'Bedford-Stuyvesant',
        'Bensonhurst',
        'Boerum Hill',
        'Brooklyn Heights',
        'Bushwick',
        'Carroll Gardens',
        'Cobble Hill',
        'Coney Island',
        'Crown Heights',
        'Downtown Brooklyn',
        'Dumbo',
        'Flatbush',
        'Fort Greene',
        'Greenpoint',
        'Midwood',
        'Park Slope',
        'Prospect Heights',
        'Propsect Park',
        'Red Hook',
        'Sheepshead Bay',
        'Sunset Park',
        'Williamsburg'
      ];
    
    return (
        <>
        <div className={styles.searchBar}>
    <InputGroup className="mb-2">
        <InputGroup.Text id="inputGroup-sizing-default">
          Search
        </InputGroup.Text>
        <Form.Control
            placeholder="parks, museums, theaters..."
          aria-label="Text input with radio button"
          aria-describedby="inputGroup-sizing-default"
        />
        </InputGroup>

    <InputGroup size="sm" className="mb-3" >
        <InputGroup.Radio 
                aria-label="Radio button for following text input"
                id="near"
                value="near"
                checked={filterType === 'near'}
                onChange={handleOptionChange}
            />
            <InputGroup.Text id="inputGroup-sizing-default" style={{ borderLeft: 'none' }}>
            Near Zip
            </InputGroup.Text>
            {filterType === 'near' && (
                <Form.Control
                    placeholder="11210"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
                // <Typeahead
                //     placeholder="11210"
                //     labelkey="zipcode"
                //     options={sortBy(zipcodes,'zipcode')}
                //     selected={selected}
                // />
            )}
        
        <InputGroup.Radio 
            aria-label="Radio button for following text input"
            id="in"
            value="in"
            checked={filterType === 'in'}
            onChange={handleOptionChange}
            
        />
            <InputGroup.Text id="inputGroup-sizing-default" style={{ borderLeft: 'none' }}>
            By Neighborhood
            </InputGroup.Text>
        {filterType === 'in' && (
              <Dropdown onSelect={handleOptionSelect}>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {neighborhood}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu} style={{ maxHeight: "200px", overflowY: "scroll" }}> 
                {options.map(option => (
                    <Dropdown.Item eventKey={option} key={option}>
                        {option}
                    </Dropdown.Item>
                    ))}
            </Dropdown.Menu>
            </Dropdown>
        )}
        <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
      </InputGroup>
      </div>
      </>
  );
}