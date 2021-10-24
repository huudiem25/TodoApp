import { Card } from '../components/Card';
import { ToDoList } from '../components/Todo';
import { NotFound } from '../components/NotFound';
import { Comment } from '../components/Comment';
import { TodoAppTimeline } from '../components/TodoAppTimeline';

export const routes = [
    // {
    //     path: "/",
    //     // component: NotFound,
    //     label: "Home"
    // },
    {
        path: "/timeline",
        component: TodoAppTimeline,
        label: "Timeline"
    },
    {
        path: "/card",
        component: Card,
        label: "Card"
    },
    {
        path: "/todo",
        component: ToDoList,
        label: "TODO"
    },
    {
        path: "/comment",
        component: Comment,
        label: "Comments"
    },
    
    {
        path: "*",
        component: NotFound,
        // label: "Not Found"
    }
];