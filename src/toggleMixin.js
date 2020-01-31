export default {
    data: () => ({
        visible: true
    }),
    methods: {
        toggle() {
            this.visible = !this.visible;
        }
    }
}
