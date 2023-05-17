import Nav from './Nav';
import NavItem from './NavItem';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='bg-[#001944D9]'>
      <Nav>
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/our-story'>Our Story</NavItem>
        <NavItem href='/gallery'>Gallery</NavItem>
        <NavItem href='/schedule'>Schedule</NavItem>
        <NavItem href='/gift-registry' special='gift'>
          Gift Registry
        </NavItem>
      </Nav>
      <div className='h-96 text-[#BEC7D7] flex flex-col justify-center items-center font-serif font-normal'>
        {children}
      </div>
    </header>
  );
}
