import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {userReducer} from "./userReducer";
import {settingsReducer} from "./settingsReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    settings:settingsReducer
})

export type RootState =ReturnType<typeof rootReducer>