import { atom } from "recoil";

export const slideState = atom({
    key: 'slideState',
    default: {open: false, item: null}
})

export const messagesState = atom({
    key: 'messagesState',
    default: [{dateTime: '', user: '', body: ''}]
})