import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import customEnv from 'custom-env';

import app from '../src/index';

const prefix = '/api/v1';

dotenv.config();
customEnv.env(true);

chai.use(chaiHttp);
chai.should();

describe('Test for the Staffs controller functions', () => {
	it('should create a staff entity if necesary data is passed', (done) => {
		const staff = {
			firstname: 'Kunle',
			lastname: 'Afolayun',
			email: 'kunle@yahoo.com',
			password: 'testing',
			department: 'sales',
		};
		chai
			.request(app)
			.post(`${prefix}/staff`)
			.send(staff)
			.end((err, res) => {
				const { data } = res.body;
				expect(res).to.have.status(201);
				expect(data).to.include({
					firstname: 'Kunle',
					lastname: 'Afolayun',
					email: 'kunle@yahoo.com',
				});
				done();
			});
	});

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
