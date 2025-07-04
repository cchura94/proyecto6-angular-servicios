import { Routes } from '@angular/router';
import { Chat } from './chat/chat';
import { Blog } from './blog/blog';

export const routes: Routes = [
    {
        path: '',
        component: Chat
    },
    {
        path: 'blog',
        component: Blog
    }
];
