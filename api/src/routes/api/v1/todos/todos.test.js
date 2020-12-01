const request = require('supertest')
const app = require('../../../../app')

describe('Todos v1', () => {
  it('it should GET', async () => {
    const res = await request(app).get('/api/v1/todos/')
    expect(res.statusCode).toEqual(200)
  })
})
