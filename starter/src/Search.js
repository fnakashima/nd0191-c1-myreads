import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({search}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const targetSearchTerm = e.target.value;
        setSearchTerm(targetSearchTerm);

        search(targetSearchTerm);
    };

    return (
        <div className="search-books-bar">
            <a className="close-search" href="/">Close</a>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by title, author, or ISBN"/>
        </div>
    );
};

Search.propTypes = {
    search: PropTypes.func.isRequired
}

export default Search;