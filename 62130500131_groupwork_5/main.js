const app = Vue.createApp({
    data() {
        return {
            tasks: [
                {
                    no: 0,
                    url: 'images/1.jpg',
                    title: "Colorado, USA",
                    done: false,
                },
                {
                    no: 1,
                    url: 'images/2.jpg',
                    title: "Kadıköy/İstanbul", done: false
                },
                {
                    no: 2,
                    url: 'images/3.jpg',
                    title: "Tre Cime di Lavaredo, Taliansko",
                    done: false,
                },
                {
                    no: 3,
                    url: 'images/4.jpg',
                    title: "Latourell Falls, Oregon, USA",
                    done: false,
                },
                {
                    no: 4,
                    url: 'images/5.jpg',
                    title: "Door County, WI, USA",
                    done: false,
                }

            ],
            form: {
                text: "",
                search: false,
            },
            hasView: false,
            viewImg: '',
        };
    },
    methods: {
        like(task) {
            this.tasks[task.no].done = !this.tasks[task.no].done;
        },
        toggleView(task) {
            console.log(task);
            this.viewImg = this.tasks[task].url;
            this.hasView = true;
        },
        close() {
            this.hasView = false;
        },
        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },
    },
    computed: {
        countUndone() {
            return this.tasks.filter((t) => t.done).length;
        },
        searching() {
            return this.tasks.filter((member) => {
                return member.title.toLowerCase().includes(this.form.text.toLowerCase());
            });
        },
    },
});
          