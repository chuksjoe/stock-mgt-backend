import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import customEnv from 'custom-env';

import app from '../index';

dotenv.config();
customEnv.env(true);

chai.use(chaiHttp);
chai.should();

describe('Testing the Server Entry Point.', () => {
	it('should log the current port', () => {
		app.port.should.be.eql(parseInt(process.env.PORT, 10));
	});
	it('should successfully hit the index endpoint.', (done) => {
		chai
			.request(app)
			.get('/api/v1/')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});
});
