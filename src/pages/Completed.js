import React from 'react';
import CompletedItem from '../components/CompletedItem';
import Layout from '../components/Layout';
import Page from '../components/Page';
import useTodos from '../hooks/useTodos';

const Completed = () => {
    const {todos, refetch} = useTodos(true)

    return (
        <Page>
            <Layout>
                <h2 className='text-center py-5 text-2xl font-bold'>Completed Task</h2>
                <div className='flex flex-col gap-5 mt-10'>
                    {
                        todos?.map((todo, index) => <CompletedItem
                            key={todo._id}
                            index={index}
                            todo={todo}
                            refetch={refetch}
                        >
                        </CompletedItem>)
                    }
                </div>
            </Layout>
        </Page>
    );
};

export default Completed;