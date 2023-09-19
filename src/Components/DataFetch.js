import React, { useState, useEffect } from 'react'

const DataFetch = () => {
    const [todos, setTodos] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Fetching is not successful!')
                    }
                    else {
                        return res.json()
                    }
                })
                .then((data) => {
                    setTodos(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((error) => {
                    setError(error.message)
                    setIsLoading(false)
                })
        }, 2000)
    }, [])
    return (
        <div>
            <h1>Todos</h1>
            {isLoading && <p>Todos are loading</p>}
            {error && <p>{error}</p>}
            {todos && todos.map((todo) => {
                return (
                    <p key={todo.id}>{todo.id}<br />{todo.title}</p>
                )
            })}
        </div>
    )
}

export default DataFetch
