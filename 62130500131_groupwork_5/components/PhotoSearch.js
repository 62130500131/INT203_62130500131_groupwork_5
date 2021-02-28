app.component("photo-search", {
    props: {
        form: Object,
    },
    template:
        /*html*/
        `
    <div>
        <span :class="{'hidden' : form.search }"><i class="fas fa-search fa-2x" @click="search" ></i></span>
            <span :class="{'hidden' : !form.search}">
                <input class="flex-1 p-2 bg-white border-b-2 border-blue-200 rounded"
                    placeholder="Please enter text for searching photos" v-model="form.text">
                <button class="px-4 py-2 mx-2 text-white bg-pink-300 rounded-full" @click="cancel">Cancel</button>
            </span>
    </div>
   `,
    methods: {
        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },
    }
});