import {IPost} from "../types/user";

export interface Iuser {
     id:string|null;
     firstName: string | null;
     lastName: string | null;
     age: string | null;
     email: string | null;
     userImage:string|null;
     password: string | null;
     country: string | null;
     city: string | null;
     posts: [IPost]
}
