import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user =  createUser({
        email: 'jadna@silva.com.br',
        password: '123343',
        techs: [
            'Node.Js',
            'ReactJs',
            { title: 'JavaScript', experience: 1000},
        ],
    });

    console.log(user.email);

    return response.json({ message: 'Hello World '});
}