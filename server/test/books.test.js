/* eslint-disable no-undef */
import request from 'supertest'
import app from '../src/app' 


describe('Test Books API', () => {
  test('GET /books', (done) => {
    request(app)
      .get('/books')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })
  test('POST /books', (done) => {
    request(app)
      .post('/books')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })
  // More things come here
})