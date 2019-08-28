import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import customEnv from 'custom-env';

import app from '../index';

const prefix = '/api/v1';

dotenv.config();
customEnv.env(true);

chai.use(chaiHttp);
chai.should();

describe('Test for the Staffs controller functions', () => {
	it('should return all created staff entity', (done) => {
		chai
			.request(app)
			.get(`${prefix}/staff`)
			.end((err, res) => {
				res.should.have.status(200);
				expect(res.body.data).to.have.length(1);
				done();
			});
	});
});
