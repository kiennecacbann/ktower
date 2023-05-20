import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer, { forgotPasswordReducer, updatePasswordReducer } from './reducers/user.reducer'
import {
  createPostReducer,
  getPostReducer,
  getPostsByCategoriesIdReducer,
  getPostsReducer,
} from './reducers/post.reducer'
import { getCategoriesPostReducer } from './reducers/categories-post.reducer'
import { getUtilReducer, getUtilsByCategoriesIdReducer, getUtilssReducer } from './reducers/utils.reducer'
import {
  getAllCategoriesUtilsReducer,
  getAllUtilsByCategoriesReducer,
  getCategoriesUtilReducer,
} from './reducers/categories-utils.reducer'
import { getReportTypesReducer } from './reducers/type-report.reducer'
import { getRoomMeReducer } from './reducers/room.reducer'
import { createReportReducer } from './reducers/report.reducer'

const initialState = {}

const reducers = combineReducers({
  user: userReducer,
  forgotPasswordReducer,
  updatePasswordReducer,
  createPostReducer,
  getCategoriesPostReducer,
  getPostsReducer,
  getPostReducer,
  getUtilssReducer,
  getUtilReducer,
  getAllCategoriesUtilsReducer,
  getAllUtilsByCategoriesReducer,
  getCategoriesUtilReducer,
  getReportTypesReducer,
  getRoomMeReducer,
  createReportReducer,
  getPostsByCategoriesIdReducer,
  getUtilsByCategoriesIdReducer,
})
const middleware = [thunk]
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store