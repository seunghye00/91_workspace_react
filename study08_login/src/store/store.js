import { create } from 'zustand'

// zustand는 RAM 저장소이다.
// 따라서 새로고침하면 초기화 됨.... ㅠㅠ

export const useAuthStore = create(set => ({
    loginID: '',
    // setLoginID: param => set({ loginID: param })
    // setLoginID: loginID => set({ loginID: loginID })
    setLoginID: loginID => set({ loginID }),
}))
