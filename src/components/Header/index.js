import logosvg from '../../SVG/logo-frontpush3.0.svg';
function Header(){
    return (
        <header className='flex-space-between'>
            <div className='logo border'>
                <img src={logosvg}></img>
            </div>
            <div className='search'>
                <input type='text' className='input-search' placeholder=' Pesquise aqui o que quiser'></input>
            </div>
                <ul className='menu'>
                    <li><a href='#' className='navlink'>Categories</a></li>
                    <li><a href='#' className='navlink'>About</a></li>
                    <li><a href='#' className='navlink'>Contact</a></li>
                </ul>
        </header>    
    );
}
export default Header;