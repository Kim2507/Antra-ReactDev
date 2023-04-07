const API = (() =>{
    const API_URL = "http://localhost:3000/todos";

    // return a promise that will resolve to the todos

    const getTodos = async () => {
        const res = await fetch(API_URL);
        return await res.json();
    };

    const postTodo = async (newTodo) => {
        console.log(newTodo);
        const res = await fetch(API_URL, {
            method: "POST",
            header:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        });
        return await res.json();
    };

    const deleteTodo = async (id) =>{
        await fetch(`${API_URL}/${id}`,{
            method:"DELETE",
        });
    };

    return {
        getTodos,
        postTodo,
        deleteTodo,
    };
})();