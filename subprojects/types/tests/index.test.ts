import { IUser } from '../src/index';

describe("IUser", function () {
    let user: IUser;
    test("class implementing IUser has id, name, userId properties", () => {
        user = new (class User implements IUser {
          id;
          userId;
          name;
          constructor(
            id: number,
            userId: string,
            name: string
          ){
            this.id = id;
            this.userId = userId;
            this.name = name;
          }
        })(1, "johnD", "John Doe");

        expect(user.id).toEqual(1);
        expect(user.userId).toEqual("johnD");
        expect(user.name).toEqual("John Doe");
    });
});
