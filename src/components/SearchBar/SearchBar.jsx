import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'
import { Typeahead } from 'react-bootstrap-typeahead';
import { Link, useNavigate, Routes, Route} from 'react-router-dom'
import styles from './searchBar.module.css';
import zipcodesData from '../../../results.json'

export function SearchBar({setZip,handleSearchEngine,neighborhood,setNeighborhood,filterType,setFilterType, userResult,results,searchTerm,setSearchTerm,options,filteredResults,setFilteredResults,setSummaryBanner,setLocationInquiry,zipCodes,setZipCodes,setNeighborhoodList,neighborhoodList}){

  const [uniqueNeighborhoods,setUniqueNeighborhoods] = useState([]);
  const [selectedNeighborhood,setSelectedNeighborhood] = useState('New York City');
  const navigateTo = useNavigate();
  
  useEffect(() => {
        const zipcodes = zipcodesData.results.map(result => ({
          zipcode: result.zipcode
        }));
        const uniqueValues = [];
        const nb = zipcodesData.results.map(result => 
          result.neighborhood
        );
        nb.sort();
        let unique = new Set(nb);
        setZipCodes(zipcodes);
        setNeighborhoodList(Array.from(unique));
  }, []);

    const NeighborhoodToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {/* neighborhood placeholder updates immediately*/}
            <Form.Control
            className={styles.forms}
                placeholder={selectedNeighborhood}
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
      setSelectedNeighborhood(eventKey);
      setNeighborhood(eventKey);
        console.log(eventKey);
        console.log(neighborhood);
    }

    const handleSearchTermChange = (e) => {
      setSearchTerm(e.target.value);
    }

    const handleZipChange = (e) => {
      setZip(e.target.value);
    } 
    // const neighborhoodList = [
    //     'Bay Ridge',
    //     'Bedford-Stuyvesant',
    //     'Bensonhurst',
    //     'Boerum Hill',
    //     'Brooklyn Heights',
    //     'Bushwick',
    //     'Carroll Gardens',
    //     'Cobble Hill',
    //     'Coney Island',
    //     'Crown Heights',
    //     'Downtown Brooklyn',
    //     'Dumbo',
    //     'Flatbush',
    //     'Fort Greene',
    //     'Greenpoint',
    //     'Midwood',
    //     'Park Slope',
    //     'Prospect Heights',
    //     'Propsect Lefferts Gardens',
    //     'Red Hook',
    //     'Sheepshead Bay',
    //     'Sunset Park',
    //     'Williamsburg'
    //   ];

      const handleSearch = (e) => {
  e.preventDefault();
  if (searchTerm.trim() !== '') {
    handleSearchEngine();
    navigateTo(`/results?query=${searchTerm}`);
  }
};

// neighborhoodList.forEach(_neighborhood => {
//   const neighborhood = _neighborhood.neighborhood;
//   if (!uniqueValues[neighborhood]) {
//     uniqueValues[neighborhood] = true;
//     uniqueNeighborhoods.push(_neighborhood);
//   }
    return (
        <>
        <form onSubmit={handleSearch}>
        <div className={styles.neighborhoods} onKeyDown={(e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    }}>
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
      
        
        <InputGroup.Checkbox 
            aria-label="Checkbox for inputting neighborhood to search term within"
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
              <Dropdown.Toggle as={NeighborhoodToggle} id="dropdown-custom-components">
                {selectedNeighborhood} 
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
          onClick={() => handleSearchEngine()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlassLocation}/>
        </Button>
        </Link>
      </InputGroup>

      </div>
      </form>
      </>
  );
}