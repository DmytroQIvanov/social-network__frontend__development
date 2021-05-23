import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {userReducer} from "./userReducer";
import {settingsReducer} from "./settingsReducer";
import {authReducer} from "./authReducer";
import {friendsReducer} from "./friendsReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    settings:settingsReducer,
    auth:authReducer,
    friends:friendsReducer,
})

export type RootState =ReturnType<typeof rootReducer>