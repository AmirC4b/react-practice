import '../assets/header-styles.css'


export default function Header({ cartCount }){
    return (
    <div className='top-header'>
        <div className='header-container'>
            <div className='navbar'>
            <ul className='nav'>
                <li>HOME</li>
                <li>LOGIN</li>
                <li>DOCS</li>
                <li>TOP SELLER</li>
            </ul>
            </div>
            <div className='title'>
                <h1>SHOP</h1>
            </div>
            <div className='cart'>
                <img src="/cart.png" alt="" className='cart-img' />
                <span className='cart-count'>{cartCount}</span>
            </div>
        </div>
    </div>
    );
}