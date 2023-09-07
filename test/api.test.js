const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Update the path to your Node.js API file
const should = chai.should();

chai.use(chaiHttp);

describe('Hello World API', () => {
  it('should return "Hello, World!" when accessing the root URL', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.text.should.equal('Hello, World!');
        done();
      });
  });
});



