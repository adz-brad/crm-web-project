import { atom } from "recoil";

export const slideState = atom({
    key: 'slideState',
    default: {open: false, item: null}
})

export const messagesState = atom({
    key: 'messagesState',
    default: [
        {read: false, dateTime: '', user: 'Ram', body: "DUDE! It's 🔥!!!!"},
        {read: true, dateTime: '', user: 'Brad', body: 'Hey buddy, how is the UI looking so far?'}
    ]
})

export const popupState = atom({
    key: 'popupState',
    default: {open: false, item: null}
})