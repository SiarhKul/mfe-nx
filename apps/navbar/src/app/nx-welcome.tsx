import { LangSwitcher } from '../entities/LangSwitcher/LangSwitcher';
import { NavBar } from '../entities/Navbar/NavBar';

export function NxWelcome({ title }: { title: string }) {
  return (
    <section id="navbar-mf">
      <LangSwitcher />
      <NavBar />
    </section>
  );
}

export default NxWelcome;
