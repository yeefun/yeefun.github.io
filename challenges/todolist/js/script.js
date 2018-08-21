let vm = new Vue({
    el: '#todos',
    data: {
        add: true,
        newTodo: {
            title: '',
            star: false,
            date: '',
            time: '',
            file: '',
            comment: ''
        },
        todos: [{
            title: '',
            open: false,
            star: false,
            date: '',
            time: '',
            file: '',
            comment: ''
        }],
        // menuOpen: false
    },
    methods: {
        addNewTodo() {
            this.add = true;
            let newTodo = {
                title: this.newTodo.title,
                open: false,
                star: this.newTodo.star,
                comment: this.newTodo.comment,
            }
            this.todos.unshift(newTodo);
            this.newTodo = {
                title: '',
                star: false,
                date: '',
                time: '',
                file: '',
                comment: ''
            }
        },
        clickFile(evt) {
            evt.currentTarget.previousSibling.previousSibling.click();
        }
    }
});