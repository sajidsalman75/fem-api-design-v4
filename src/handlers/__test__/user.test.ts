import * as user from "../user";
describe("user handler", () => {
    it("should create a new user", async () => {
        const req = { body: { username: "hello", passowrd: "hi" } };
        const res = {
            json({ token }) {
                expect(token).toBeTruthy();
            },
        };

        await user.createNewUser(req, res, () => {});
    });
});
