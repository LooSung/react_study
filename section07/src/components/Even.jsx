import { useEffect } from 'react';

// 3. LifeCycle - UnMount
const Even = () => {
    useEffect(() => {
        // Clean Up, 정리함수
        return () => {
            console.log('UnMount');
        };
    }, []);

    return <div>짝수입니다.</div>;
};

export default Even;
