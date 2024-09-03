import './Header.css';
import { memo } from 'react';

const Header = () => {
    return (
        <div className='Header'>
            <h3>오늘은 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

// 자신이 받은 Props가 바뀌지 않으면, Re-Rendering 되지 않는다.
// const memoizedHeader = memo(Header);
// export default memoizedHeader;

export default memo(Header);
