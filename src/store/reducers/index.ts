import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {userReducer} from "./userReducer";
import {settingsReducer} from "./settingsReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    settings:settingsReducer,
    auth:authReducer,
})

export type RootState =ReturnType<typeof rootReducer>