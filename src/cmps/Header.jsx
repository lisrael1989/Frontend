import { HeaderFilter } from './filters-cmps/HeaderFilter';

export function Header() {
  return (
    <>
      <header>
        <img className="logo" src="public/img/EATNOW-NEW.png" alt="" />
        <h2 className="login">Login</h2>
      </header>
      <HeaderFilter />
    </>
  );
}
