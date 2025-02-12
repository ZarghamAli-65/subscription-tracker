import {Router} from 'express';

const useRouter = Router();

useRouter.get('/', (req, res) => {
    res.send({title: 'Get all users'})
})
useRouter.get('/:id', (req, res) => {
    res.send({title: 'Get user details'})
})
useRouter.post('/', (req, res) => {
    res.send({title: 'create new user'})
})
useRouter.put('/:id', (req, res) => {
    res.send({title: 'Update user user'})
})

useRouter.delete('/', (req, res) => {
    res.send({title: 'Delete user'})
})

export default useRouter;