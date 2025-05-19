import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header>
      This is the header.
      <Logo />
      <Navigation />
    </header>
  );
}
