
import { useQuery } from 'react-query';
import { BASE_API } from '../config';

const useTodos = (complete) => {
    const queryString = complete ? '?completed=1' : "" ;
    
    const { data: todos, isLoading, error, refetch } = useQuery(('todos'), () =>
        fetch(`${BASE_API}/todos/${queryString}`)
            .then(res => res.json())
    )
    return {todos, isLoading, error, refetch}
}

export default useTodos ;