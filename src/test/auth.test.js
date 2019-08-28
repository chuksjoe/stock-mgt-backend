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

describe('Test for the Auth controller functions', () => {
	const staff = {
		firstname: 'Emma',
		lastname: 'Korede',
		email: 'emma.k@yahoo.com',
		password: 'testing123',
	};
	it('should successfully sign up a staff', (done) => {
		chai
			.request(app)
			.post(`${prefix}/auth/signup`)
			.send(staff)
			.end((err, res) => {
				const { data } = res.body;
				expect(res).to.have.status(201);
				expect(data).to.include({
					firstname: 'Emma',
					lastname: 'Korede',
					email: 'emma.k@yahoo.com',
				});
				done();
			});
	});
	it('should return an error message if the email is invalid', (done) => {
		const mutatedStaff = Object.assign({}, staff);
		mutatedStaff.email = 'invalid@yahoo';

		chai.request(app)
        .post(`${prefix}/auth/signup`)
        .send(mutatedStaff)
        .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.error[0]).to
            .equal('Please, enter a valid email address.');
            done();
        });
    });
    it('should return an error message if the email already exists', (done) => {
        chai.request(app)
        .post(`${prefix}/auth/signup`)
        .send(staff)
        .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.error[0]).to
            .equal(`User with this email (${staff.email}) already exist.`);
            done();
        });
    });
    it('should return an error message if the password length is less than 8', (done) => {
		const mutatedStaff = Object.assign({}, staff);
		mutatedStaff.password = 'test';
		mutatedStaff.email = 'valid@yahoo.com';

        chai.request(app)
        .post(`${prefix}/auth/signup`)
        .send(mutatedStaff)
        .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.error[0]).to
            .equal('The length of the password must be 8 and above.');
            done();
        });
    });
    it('should return an error message if the password does not contain at least a digit', (done) => {
		const mutatedStaff = Object.assign({}, staff);
		mutatedStaff.password = 'testingit';
		mutatedStaff.email = 'valid@yahoo.com';

        chai.request(app)
        .post(`${prefix}/auth/signup`)
        .send(mutatedStaff)
        .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.error[0]).to
            .equal('Password must contain at least one digit.');
            done();
        });
    });
    it('should return an error message if the first name is empty', (done) => {
		const mutatedStaff = Object.assign({}, staff);
		mutatedStaff.firstname = '';
		mutatedStaff.email = 'valid@yahoo.com';

        chai.request(app)
        .post(`${prefix}/auth/signup`)
        .send(mutatedStaff)
        .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.error[0]).to
            .equal('First name cannot be empty.');
            done();
        });
    });
    it('should return an error message if the last name is empty', (done) => {
		const mutatedStaff = Object.assign({}, staff);
		mutatedStaff.lastname = '';
		mutatedStaff.email = 'valid@yahoo.com';

        chai.request(app)
        .post(`${prefix}/auth/signup`)
        .send(mutatedStaff)
        .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.error[0]).to
            .equal('Last name cannot be empty.');
            done();
        });
    });
});
