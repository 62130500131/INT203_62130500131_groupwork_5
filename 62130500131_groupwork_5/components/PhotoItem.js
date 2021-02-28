app.component("photo-items", {
    props: {
        task: Object,
    },
    template:
        /*html*/
        `
        <article class="my-8 overflow-hidden rounded shadow">
            <div class="sm:flex sm:flex-wrap">
                <div class="relative h-56 sm:w-1/2 sm:h-auto">
                    <img class="absolute inset-0 object-cover w-full h-full" :src="task.url" alt="image" @click="clickModal(task.no)">
                </div>
                <div class="p-4 sm:w-1/2">
                    <!--post category-->
                    <span class="inline-block px-2 text-xs tracking-wide text-gray-600 uppercase bg-gray-300 rounded-full">travel</span>
                    <!--post title-->
                    <h4 class="mt-2 text-lg font-semibold text-gray-800 capitalize">
                        {{task.title}}
                    </h4>
                    <i v-show="!task.done " class="text-black transition duration-500 far fa-2x fa-heart hover:text-red-600 " @click="clickLike(task)"></i>
                <i v-show="task.done " class="text-red-500 transition duration-500 fas fa-2x fa-heart" @click="clickLike(task)"></i>
                </div>
            </div>     
        </article>
   `,
    methods: {
        clickLike(task) {
            this.$emit("when-like",task);
        },
        clickModal(task) {
            this.$emit("when-toggleview",task);
        },
    }
});