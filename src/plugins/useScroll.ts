import { getCurrentInstance } from 'vue'

export const useScroll = () => {
    const instance = getCurrentInstance()
    const lenis = instance?.appContext.config.globalProperties.$lenis

    const lockScroll = () => {
        lenis?.stop()
    }

    const unlockScroll = () => {
        lenis?.start()
    }

    return { lockScroll, unlockScroll }
}