import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        fakestore: fakeStoreSlice
    }
});

export default store;