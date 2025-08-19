import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import zhCN from 'antd/locale/zh_CN';
import type { Locale } from "antd/es/locale";

interface LanguageState {
    locale: Locale;
}

const initialState: LanguageState = {
    locale: zhCN,
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<Locale>) => {
            state.locale = action.payload;
        }
    }
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.locale;

export default languageSlice.reducer;