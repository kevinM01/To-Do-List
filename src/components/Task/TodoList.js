import React, { useEffect, useState } from "react";
import CreateTask from "./modals/CreateTask";
import Card from "./Card";
import axios from "axios"


const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    console.log("task",taskList);
    useEffect(async() => {
        // let arr = localStorage.getItem("taskList");
        let resp = await axios.get('https://0b1a38ea6ad3.ngrok.io/api/');
        let obj = (resp.data);
        setTaskList(obj);
        
    }, []);

    const deleteTask = async (obj,index) => {
        // local storage
        // let tempList = taskList;
        // tempList.splice(index, 1);
        // console.log("index", index);
        // localStorage.setItem("taskList", JSON.stringify(tempList));
        // setTaskList(tempList);
        // window.location.reload();

        // axios
        console.log(obj);
        let uid= obj.uid;
        let tempList = taskList;
        console.log("id being deleted: ", uid);
        console.log("ind",index)
        tempList.splice(index, 1);
        console.log("hy",tempList)
        setTaskList(tempList);
        console.log("j",taskList)
        await axios.delete(`https://0b1a38ea6ad3.ngrok.io/api/${uid}/`);
        window.location.reload();
    };

    const updateListArray = async(obj,index) => {
        // let tempList = taskList;
        // tempList[index] = obj;
        // localStorage.setItem("taskList", JSON.stringify(tempList));
        // setTaskList(tempList);
        // window.location.reload();
        let uid = obj.uid;
        console.log("obj uodate",obj)
        console.log("id being updated : ", uid);
        let tempList = taskList;
        tempList[index] = obj;
        
        await axios.put(`https://0b1a38ea6ad3.ngrok.io/api/${uid}/`, obj)
    
        setTaskList(tempList);
        window.location.reload();
    };

    const toggle = () => {
        setModal(!modal);
    };

    const saveTask = async (taskObj) => {

        // local storage
        // let tempList = taskList;
        // console.log("DATA: ", tempList);
        // tempList.push(taskObj);
        // localStorage.setItem("taskList", JSON.stringify(tempList));
        // setTaskList(tempList);
        // setModal(false);

        //axios
        let tempList = taskList;
        tempList.push(taskObj);
        await (await axios.post("https://0b1a38ea6ad3.ngrok.io/api/", taskObj))
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
