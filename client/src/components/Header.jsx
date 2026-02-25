// Header.jsx

import { headerStyles } from "./styles";

export default function Header() {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logosec}>
        <div style={headerStyles.logo}>LiftLog</div>

        <img
          src="/weight-logo.svg"
          style={{ ...headerStyles.icn, ...headerStyles.menuicn }}
          alt="menu-icon"
        />
      </div>

    <div style={headerStyles.navBox}>
      <div style={headerStyles.navBoxSec}>
          <div style={headerStyles.navItem}>Dashboard</div>
            <div style={headerStyles.navItem}>Workouts</div>
            <div style={headerStyles.navItem}>Exercises</div>
          </div>
      </div>


{/*       <div style={headerStyles.searchbar}>
        <input
          type="text"
          placeholder="Search"
          style={headerStyles.searchInput}
        />

        <div style={headerStyles.searchBtn}>
          <img
            src="/search-2903.svg"
            style={headerStyles.icn}
            alt="search-icon"
          />
        </div>
      </div> */}

      <div style={headerStyles.message}>
        <div style={headerStyles.circle}></div>

        <img
          src="/notification-bell-5743.svg"
          style={headerStyles.icn}
          alt="notifications"
        />

        <div style={headerStyles.dp}>
          <img
            src="/man-muscles-and-fitness-16863.svg"
            alt="dp"
            style={{ height: "400%" }}
          />
        </div>
      </div>
    </header>
  );
}