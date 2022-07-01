import React from "react";
import AddForm from "../components/AddFrom";
import Layout from "../components/Layout";
import Page from "../components/Page";
import TodoList from "../components/TodoList";
import Loading from "../components/Loading";
import useTodos from "../hooks/useTodos";

const Home = () => {
  const { todos, isLoading, refetch } = useTodos();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Page>
      <div className="text-center mt-6 pt-6 px-8 py-2">
        <h1 className="text-5xl px-8 py-2" style={{ color: '#312770' }}>Seems it's Friday..! 🙂 </h1>
        <h2 className="text-xl px-8 py-2" style={{ color: '#312770' }}>Make Your Plan And Add Some Todos Now!</h2>
      </div>

      <Layout>
        <AddForm refetch={refetch} />
        <TodoList refetch={refetch} isLoading={isLoading} todos={todos} />
      </Layout>
    </Page>
  );
};

export default Home;
