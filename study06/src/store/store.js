import { create } from 'zustand'

// 첫 번째 저장소: 문자열 상태를 관리
export const useStore = create(set => ({
    // 초기 문자열 값
    str: 'Hello',
    // 문자열 값을 변경하는 함수 (값 base로 setter 동작)
    setStr: param => set({ str: param }),
}))

// 두 번째 저장소: 배열 상태를 관리
export const useArrayStore = create(set => ({
    // 초기 배열 값
    arr: ['Apple', 'Orange', 'Mango'],
    // 배열에 요소를 추가하는 함수 (함수 base로 setter 동작)
    add: param => set(prev => ({ arr: [...prev.arr, param] })),
}))

export const useContactStore = create(set => ({
    contact: [
        { id: 1001, name: 'Tom', contact: '01012341234' },
        { id: 1002, name: 'Bob', contact: '01098765432' },
    ],
    addContact: param => set(prev => ({ contact: [...prev.contact, param] })),
    delContact: param =>
        set(prev => {
            let result = prev.contact.filter(data => {
                return data.id !== param
            })
            return { contact: result }
        }),
}))
