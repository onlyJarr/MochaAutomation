import { expect } from "chai";
// import fetch from "node-fetch";
import Ajv from "ajv";
import { skemapost, skemaget, getSingleUser, registpost } from "../scheme/skema.js";

describe("API Test", function () {
    const URL = "https://reqres.in";

    //READ - all users in one page
    it("READ - single page", async function () {
        const response = await fetch(`${URL}/api/users?page=2`);
        const schema = skemaget;

        expect(response.status).to.equal(200);

        const data = await response.json();


        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const valid = validate(data);

        expect(valid ).to.be.true;
    });

    //READ - single user
    it("READ - single user", async function () {
        const response = await fetch(`${URL}/api/users/2`);
        const schema = getSingleUser;

        expect(response.status).to.equal(200);

        const data = await response.json();


        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const valid = validate(data);

        expect(valid ).to.be.true;
    });


    //CREATE - single user
    it("CREATE - single user", async function () {
        const schema = skemapost;
        const newPost = {
            name: "morpheus",
            job: "leader",
        };

        const response = await fetch(`${URL}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });

        expect(response.status).to.equal(201);

        const data = await response.json();

        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const valid = validate(data);

        expect(valid ).to.be.true;

        
    });

    //REGISTER - single user where the user is not registered
    it("REGISTER - single user", async function () {
        const schema = registpost;
        const newPost = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        const response = await fetch(`${URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });

        expect(response.status).to.equal(200);

        const data = await response.json();

        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const valid = validate(data);

        expect(valid ).to.be.true;

        
    });
});