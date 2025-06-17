import { defineClientConfig } from '@vuepress/client'
import { h, onMounted, watch } from 'vue'
import DeprecatedBanner from './components/DeprecatedBanner.vue'
import { useRoute } from 'vue-router'

export default defineClientConfig({
    rootComponents: [
        () => h(DeprecatedBanner)
    ],
    setup() {
        const route = useRoute()

        const adjustLayout = () => {
            requestAnimationFrame(() => {
                const banner = document.querySelector('.deprecated-banner') as HTMLElement
                const height = banner?.clientHeight ?? 0

                const themeContainer = document.querySelector('.theme-container') as HTMLElement
                const navbar = document.querySelector('.navbar') as HTMLElement
                const sidebar = document.querySelector('.sidebar') as HTMLElement

                if (height > 0) {
                    if (themeContainer) themeContainer.style.paddingTop = `${height}px`
                    if (navbar) navbar.style.marginTop = `${height}px`
                    if (sidebar) sidebar.style.marginTop = `${height}px`
                }
            })
        }

        onMounted(() => {
            adjustLayout()
        })

        watch(() => route.path, () => {
            adjustLayout()
        })
    }
})