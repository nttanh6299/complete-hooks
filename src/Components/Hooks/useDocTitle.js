import { useEffect } from 'react';

const useDocTitle = (count) => {
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count]);
}
 
export default useDocTitle;