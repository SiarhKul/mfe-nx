
import { LangSwitcher } from '../entities/LangSwitcher/LangSwitcher';
import { NavBar } from '../entities/Navbar/NavBar';

export function NxWelcome({ title }: { title: string }) {
  return (
    <section id="navbar-mf">
      <LangSwitcher />
      <NavBar />
      1111111111111111111
    </section>
  );
}

export default NxWelcome;
