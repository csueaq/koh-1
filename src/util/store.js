import  store  from 'store2';

export const GetStoredSession = () => store.get("sessionId")
export const CreateStoredSession = (sessionId) => store.add("sessionId", sessionId)
export const GetStoredProfile = () => store.get("profile")
export const CreateStoredProfile = (profile) => store.add("profile", profile)
export const Reset = () => {
    store.remove("profile")
    store.remove("sessionId")
    return true
}

