import React, { useRef, useState } from 'react';
import TodoItems from './TodoItems';
import axios from 'axios';
import toast from 'react-hot-toast';

import Modal from 'react-modal';
import { BASE_API } from '../config';
import Loading from './Loading';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const TodoList = ({ todos, refetch,isLoading }) => {
    const [task, setTask] = useState({})

    const title = useRef('');
    const date = useRef('');
    const taskRef = useRef('');



    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(todo) {
        setIsOpen(true);
        setTask(todo)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }


    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = event => {
        event.preventDefault()
        const todoInfo = {
            title: title.current.value,
            date: date.current.value,
            task: taskRef.current.value
        }
        // console.log(todoInfo);
        axios.patch(`${BASE_API}/todos/${task._id}`, todoInfo)
            .then(response => {
                console.log(response);
                toast.success(`Your Task is Updated `, { id: "update" });
                closeModal()
                refetch()
            })
            .catch(function (error) {
                toast.error(`Something is wrong . Try later `, { id: "error" });
            });
    }

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div className='flex flex-col gap-5 mt-10 '>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className='bg-red-500 rounded-lg text-white px-2 py-1' onClick={closeModal}>X</button>
                <div className='mt-5 border-2 shadow-lg p-8 rounded'>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col lg:flex-row justify-between">
                            <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3 mr-5'
                                type='text'
                                ref={title}
                                defaultValue={task?.title}
                                required
                                placeholder='Write your task ..'
                            />
                            <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3'
                                type='date'
                                ref={date}
                                defaultValue={task?.date}
                                required
                                placeholder='Write your task ..'
                            />
                        </div>
                        <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3'
                            type='text'
                            ref={taskRef}
                            defaultValue={task?.task}
                            required
                            placeholder='Write your task ..'
                        />
                        <input type="submit" className='bg-sky-500 text-white w-full py-2 rounded-lg cursor-pointer' value="Update" />
                    </form>
                </div>
            </Modal>
            {
                todos.map((todo, index) => <TodoItems
                    key={todo._id}
                    index={index}
                    todo={todo}
                    openModal={openModal}
                    setTask={setTask}
                    refetch={refetch}
                >
                </TodoItems>)
            }

        </div>
    );
};

export default TodoList;