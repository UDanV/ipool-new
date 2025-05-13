import Lenis from 'lenis'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $lenis: Lenis
    }
}

export default {
    install: (app: any) => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        app.config.globalProperties.$lenis = lenis
    }
}