import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */


/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
// Create a new todo for a user and return the todo object
export async function createTodo(userId: number, title: string, description: string) {
    const result = await client.query(
        `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *;`,
        [userId, title, description]
    );
    return result.rows[0];
}

// Mark a specific todo as done and return the updated todo object
export async function updateTodo(todoId: number) {
    const result = await client.query(
        `UPDATE todos SET done = true WHERE id = $1 RETURNING *;`,
        [todoId]
    );
    return result.rows[0];
}

// Get all todos for a given user and return an array of todos
export async function getTodos(userId: number) {
    const result = await client.query(
        `SELECT * FROM todos WHERE user_id = $1;`,
        [userId]
    );
    return result.rows;
}