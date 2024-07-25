import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'; // Adjust path if needed

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // You can also add middleware here if needed
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

export default store;
