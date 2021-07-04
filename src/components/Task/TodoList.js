import React, { useEffect, useState } from "react";
import CreateTask from "./modals/CreateTask";
import Card from "./Card";
import axios from "axios"

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    console.log("task",taskList);
    useEffect(() => {
        let arr = localStorage.getItem("taskList");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };

    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };

    const toggle = () => {
        setModal(!modal);
    };

    const saveTask = async (taskObj) => {

        // local storage
        let tempList = taskList;
        console.log("DATA: ", tempList);
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);

        //axios
        let tempList = taskList;
        tempList.push(taskObj);
        console.log("rh")
        const response = await axios({
            method: "post",
            url: "https://todo-list-46.herokuapp.com/api/",
            data:"tempList"
        })
        let promise = await axios.get('https://todo-list-46.herokuapp.com/api/');
        console.log("h-------------------------", promise,response);
        setTaskList(tempList);
        setModal(false);
    
    };

    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
                    Create Task
                </button>
            </div>

            <div className="task-container">
                {taskList && taskList.map((obj, index) => (
                    <Card
                    taskObj={obj}
                    index={index}
                    deleteTask={deleteTask}
                    updateListArray={updateListArray}
                    />
                ))}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoList;
