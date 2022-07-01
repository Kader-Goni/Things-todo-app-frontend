import React from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Page from '../components/Page';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodos';

const Todos = () => {
    const {todos, isLoading , refetch} = useTodos()
    
    if (isLoading) {
        return <Loading />
    }
    return (
        <Page>
            <Layout>
                <h2 className='text-center py-5 text-2xl font-bold'>All Task</h2>
                <TodoList refetch={refetch} isLoading={isLoading} todos={todos}/>
            </Layout>
        </Page>
    );
};

export default Todos;