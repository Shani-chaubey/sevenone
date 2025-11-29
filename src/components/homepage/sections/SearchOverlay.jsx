"use client";

export default function SearchOverlay() {
  return (
    <div className="search-container" id="searchContainer">
      <div className="search-wrapper">
        <form className="search-form" id="searchForm">
          <input
            className="search-input"
            id="searchInput"
            name="q"
            placeholder="Search..."
            type="text"
          />
          <button className="search-submit-btn" type="submit">
            Search
          </button>
          <button className="search-close-btn" id="closeSearch" type="button">
            <i className="bi bi-x-lg" />
          </button>
        </form>
        <div className="search-preview" id="searchPreview" />
      </div>
    </div>
  );
}
