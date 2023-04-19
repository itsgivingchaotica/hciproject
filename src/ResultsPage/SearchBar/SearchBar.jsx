import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'
import { Typeahead } from 'react-bootstrap-typeahead';
import { Link, Routes, Route} from 'react-router-dom'
import styles from './searchBar.module.css';
import zipcodesData from '../../../results.json'

export function SearchBar({setZip,handleSearchEngine,daneighborhood,setDaNeighborhood,filterType,setFilterType, userResult,results,searchTerm,setSearchTerm,options,filteredResults,setFilteredResults,setSummaryBanner,setLocationInquiry,zipCodes,setZipCodes}){
  
  useEffect(() => {
        const zipcodes = zipcodesData.results.map(result => ({
          zipcode: result.zipcode
        }));
        setZipCodes(zipcodes);
  }, []);

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
            <Form.Control
            className={styles.forms}
                placeholder={daneighborhood}
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
        
    const handleOptionChange = () => {
      const newFilterType = filterType === "near" ? "in" : "near";
      setFilterType(newFilterType);
    }

    const handleOptionSelect = (eventKey) => {
        setDaNeighborhood(eventKey);
        console.log(eventKey);
    }

    const handleSearchTermChange = (e) => {
      setSearchTerm(e.target.value);
      console.log(searchTerm);
    }

    const handleZipChange = (e) => {
      setZip(e.target.value);
      console.log(zip);
    } 
    
    console.log(filteredResults);

    const neighborhoodList = [
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
        'Propsect Lefferts Gardens',
        'Red Hook',
        'Sheepshead Bay',
        'Sunset Park',
        'Williamsburg'
      ];
    
    return (
        <>
        <div className={styles.neighborhoods}>
        <InputGroup className="mb-2 mt-4">
        <InputGroup.Text id="inputGroup-sizing-default">
          Search
        </InputGroup.Text>
        <Form.Control
          placeholder="parks, museums, theaters..."
          aria-label="Text input with radio button"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => handleSearchTermChange(e)}
        />
        </InputGroup>

    <InputGroup size="sm" className="mb-3" >
        <InputGroup.Radio 
                aria-label="Radio button for following text input"
                id="near"
                value="near"
                checked={filterType === 'near'}
                onChange={() => handleOptionChange()}
            />
            <InputGroup.Text id="inputGroup-sizing-default" style={{ borderLeft: 'none' }}>
            By Zipcode
            </InputGroup.Text>
            {filterType === 'near' && (
                // <Form.Control
                //     placeholder="11210"
                //     aria-label="Default"
                //     aria-describedby="inputGroup-sizing-default"
                // />
                <Typeahead 
                    defaultSelected={zipCodes.find(zipCode => zipCode === "11210")}
                    id="zipcodes"
                    labelKey="zipcode"
                    options={zipCodes}
                    placeholder="11210"
                    onChange={(selected) => {
                      if (selected && selected.length > 0) {
                        setZip(selected[0].zipcode);
                      }
                    }}
                />
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
                {daneighborhood}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu} style={{ maxHeight: "200px", overflowY: "scroll" }}> 
                {neighborhoodList.map(_neighborhood => (
                    <Dropdown.Item eventKey={_neighborhood} key={_neighborhood}>
                        {_neighborhood}
                    </Dropdown.Item>
                    ))}
            </Dropdown.Menu>
            </Dropdown>
        )}
        <Link to="/results/">
        <Button 
          variant="success" 
          className={styles.submit}
          onClick={() => handleSearchEngine()}>
            <FontAwesomeIcon icon={faMagnifyingGlassLocation}/>
        </Button>
        </Link>
      </InputGroup>

      </div>
      </>
  );
}