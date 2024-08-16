import { HeaderFilter } from './filters-cmps/HeaderFilter';

export function Header() {


  return (
    <div className="header-main-container">
      <header className="main-container full">
        <div className="header-container ">
          <img className="logo" src="Img/EATNOW-NEW.png" alt="" />
          <h2 className="login">Login</h2>
        </div>
      </header>
      <HeaderFilter />
    </div>
  );
}
