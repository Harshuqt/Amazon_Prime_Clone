import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Categories from "./Categories";
import HeaderCategoryLi from "./HeaderCategoryLi";
import Languages from "./Languages";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState("Harshal");
  const [isEmpty, setIsEmpty] = useState(true);
  function handleChange(event) {
    if (event.target.value === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }

  const [isActive, setIsActive] = useState(false);
  document.addEventListener("scroll", (event) => {
    // asd = window.pageYOffset;
    // console.log(asd);
    if (
      window.pageYOffset >
      document.getElementsByClassName("header-div-1")[0].getBoundingClientRect()
        .height
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });
  return (
    <header style={{ display: "inline" }}>
      <div
        className={isActive ? "header-div-1 header-top-margin" : "header-div-1"}
      >
        <div className="header-div-2">
          <div className="header-div-3">
            <a className="header-anchor" href="">
              <img
                className="header-anchor-img"
                src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
                alt="Prime Video"
              ></img>
            </a>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ alignSelf: "stretch", display: "flex" }}>
                <ol className="header-ol">
                  <li className="header-li header-li-position">
                    <label className="header-li-label">
                      <a href="" className="header-li-anchor">
                        Home
                        <div className="header-li-arrow-div">
                          <svg
                            viewBox="0 0 12 7"
                            fill="none"
                            className="header-li-arrow-svg"
                          >
                            <path d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 0.292893L5.29289 5.29289L6.70711 6.70711L11.7071 1.70711L10.2929 0.292893ZM6.70711 5.29289L1.70711 0.292893L0.292893 1.70711L5.29289 6.70711L6.70711 5.29289Z"></path>
                          </svg>
                        </div>
                      </a>
                    </label>
                    <div className="header-dropdown-div">
                      <ul className="header-dropdown-list">
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            All
                          </a>
                        </li>
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            Movies
                          </a>
                        </li>
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            TV shows
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="header-li header-li-position">
                    <label className="header-li-label">
                      <a href="" className="header-li-anchor">
                        Store
                        <div className="header-li-arrow-div">
                          <svg
                            viewBox="0 0 12 7"
                            fill="none"
                            className="header-li-arrow-svg"
                          >
                            <path d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 0.292893L5.29289 5.29289L6.70711 6.70711L11.7071 1.70711L10.2929 0.292893ZM6.70711 5.29289L1.70711 0.292893L0.292893 1.70711L5.29289 6.70711L6.70711 5.29289Z"></path>
                          </svg>
                        </div>
                      </a>
                    </label>
                    <div className="header-dropdown-div">
                      <ul className="header-dropdown-list">
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            All
                          </a>
                        </li>
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            Rent
                          </a>
                        </li>
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            Channels
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="header-li header-li-position">
                    <label className="header-li-label">
                      <a href="" className="header-li-anchor">
                        Live TV
                      </a>
                    </label>
                  </li>
                  <li className="header-li category-li">
                    <label className="header-li-label">
                      <a href="" className="header-li-anchor">
                        Categories
                        <div className="header-li-arrow-div">
                          <svg
                            viewBox="0 0 12 7"
                            fill="none"
                            className="header-li-arrow-svg"
                          >
                            <path d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 0.292893L5.29289 5.29289L6.70711 6.70711L11.7071 1.70711L10.2929 0.292893ZM6.70711 5.29289L1.70711 0.292893L0.292893 1.70711L5.29289 6.70711L6.70711 5.29289Z"></path>
                          </svg>
                        </div>
                      </a>
                    </label>
                    <div className="qwert">
                      {/* dropdownlist react on hover state toggle class */}
                      <div className="qwert-div">
                        <label className="qwert-label">Genres</label>
                        <ul className="qwert-ul">
                          {Categories.map((listitem) => {
                            return (
                              <HeaderCategoryLi
                                key={listitem.id}
                                name={listitem.name}
                              />
                            );
                          })}
                        </ul>
                      </div>
                      <div className="qwert-div">
                        <label className="qwert-label">
                          Featured collections
                        </label>
                        <ul className="qwert-ul">
                          {Languages.map((listitem) => {
                            return (
                              <HeaderCategoryLi
                                key={listitem.id}
                                name={listitem.name}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="header-li header-li-position">
                    <label className="header-li-label">
                      <a href="" className="header-li-anchor">
                        My Stuff
                        <div className="header-li-arrow-div">
                          <svg
                            viewBox="0 0 12 7"
                            fill="none"
                            className="header-li-arrow-svg"
                          >
                            <path d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 0.292893L5.29289 5.29289L6.70711 6.70711L11.7071 1.70711L10.2929 0.292893ZM6.70711 5.29289L1.70711 0.292893L0.292893 1.70711L5.29289 6.70711L6.70711 5.29289Z"></path>
                          </svg>
                        </div>
                      </a>
                    </label>
                    <div className="header-dropdown-div">
                      <ul className="header-dropdown-list">
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            All
                          </a>
                        </li>
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            Watchlist
                          </a>
                        </li>
                        <li className="header-dropdown-listitem">
                          <a
                            href=""
                            className="header-dropdown-listitem-anchor"
                          >
                            Rentals
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="header-right-div">
              <div className="header-nav-search-div">
                <input className="header-nav-search-input" type="checkbox" />
                <div className="header-search-div-1">
                  <div className="header-search-div-2">
                    <form method="GET" className="header-search-form">
                      <span className="header-search-form-span-1"></span>
                      <input type="hidden"></input>
                      <input
                        onChange={handleChange}
                        type="search"
                        className="header-search-form-input"
                        name="phrase"
                        required
                        placeholder="Search"
                        spellCheck="false"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                      ></input>

                      <span className="header-search-form-span-2">
                        {isEmpty ? null : (
                          <input
                            onClick={handleChange}
                            type="reset"
                            className="header-search-form-reset"
                            value={"Clear"}
                          />
                        )}
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="header-nav-profile-div">
                <ol className="header-nav-profile-ol">
                  <li className="header-nav-profile-li">
                    {isLoggedIn ? (
                      <>
                        <label className="header-nav-profile-li-label">
                          <div className="header-nav-profile-li-label-div">
                            <span className="header-nav-profile-li-label-div-span-1">
                              {userName}
                            </span>
                            <span className="header-nav-profile-li-label-div-span-2"></span>
                          </div>
                        </label>
                        <div className="qwert">
                          <div className="qwert-div">
                            <label className="qwert-label">Your Account</label>
                            <ul className="header-nav-profileinfo-ul">
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Help</a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Watch Anywhere</a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Account & Settings</a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Prime Benefits</a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/" onClick={(e) => { e.preventDefault(); setIsLoggedIn(false); }}>Sign out</a>
                              </li>
                            </ul>
                          </div>
                          <div className="qwert-div">
                            <label className="qwert-label">Profiles</label>
                            <ul className="header-nav-profileinfo-ul">
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Profile A</a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Profile B</a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Profile C</a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li add-button">
                                <a href="#/">
                                  <span className="header-nav-add-profile-span-1"></span>
                                  <span className="header-nav-add-profile-span-2">
                                    Add new
                                  </span>
                                </a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Manage profiles</a>
                              </li>
                              <li className="header-nav-profileinfo-ul-li">
                                <a href="#/">Learn more</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <label 
                        className="header-nav-profile-li-label" 
                        onClick={(e) => { e.preventDefault(); setShowLogin(true); }}
                        style={{cursor: 'pointer'}}
                      >
                        <div className="header-nav-profile-li-label-div">
                          <span className="header-nav-profile-li-label-div-span-1" style={{color: 'white', paddingRight: '20px', fontWeight: 'bold'}}>
                            Sign In
                          </span>
                        </div>
                      </label>
                    )}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLogin && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, 
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: '#19222b', padding: '40px', borderRadius: '8px', 
            display: 'flex', flexDirection: 'column', gap: '20px',
            width: '300px', color: 'white', border: '1px solid #333',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
          }}>
            <h2 style={{margin: 0, fontSize: '24px', fontWeight: 'bold'}}>Sign In</h2>
            <input 
              type="text" 
              placeholder="Enter your name" 
              id="dummy-login-name"
              style={{ padding: '12px', borderRadius: '4px', border: 'none', fontSize: '16px' }}
              onKeyDown={(e) => {
                if(e.key === 'Enter') {
                  const name = e.target.value;
                  if(name) {
                    setUserName(name);
                    setIsLoggedIn(true);
                    setShowLogin(false);
                  }
                }
              }}
            />
            <button 
              style={{ padding: '12px', backgroundColor: '#00a8e1', border: 'none', color: 'white', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
              onClick={() => {
                const name = document.getElementById('dummy-login-name').value;
                if(name) {
                  setUserName(name);
                  setIsLoggedIn(true);
                  setShowLogin(false);
                }
              }}
            >Login</button>
            <button 
              style={{ padding: '12px', backgroundColor: 'transparent', border: '1px solid #555', color: 'white', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
              onClick={() => setShowLogin(false)}
            >Cancel</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
