const request = require('supertest')
const app = require('../../../../app')

describe('Todos v1', () => {
    it('it should GET todos', async () => {
        const res = await request(app).get('/api/v1/todos/')
        expect(res.statusCode).toEqual(200)
    })

    it('it should delete todo', async () => {
        const res = await request(app).delete('/api/v1/todos/remove')
        expect(res.statusCode).toEqual(200)
    })
})
