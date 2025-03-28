import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 */
export async function createTodo(userId: number, title: string, description: string) {
    return await prisma.todo.create({
        data: {
            userId,
            title,
            description,
            done: false,
        },
    });
}

/*
 * Mark done as true for this specific todo.
 * Should return a todo object
 */
export async function updateTodo(todoId: number) {
    return await prisma.todo.update({
        where: { id: todoId },
        data: { done: true },
    });
}

/*
 * Get all the todos of a given user
 * Should return an array of todos
 */
export async function getTodos(userId: number) {
    return await prisma.todo.findMany({
        where: { userId },
    });
}
