app.component("photo-views", {
    props: {
        img: String,
        view: Boolean
    },
    template:
        /*html*/
        `
        <div v-show="view" class="fixed top-0 flex justify-center w-screen h-screen bg-black ">
            <div class="h-screen m-6 ">
                <i class="flex-row-reverse text-white cursor-pointer far fa-2x fa-times-circle" @click="clickClose"></i>
                <img :src="img" class="m-6 border border-4 border-white h-5/6">
            </div>
        </div>
   `,
    methods: {
        clickClose() {
            this.$emit("when-close")
        },
    }
});