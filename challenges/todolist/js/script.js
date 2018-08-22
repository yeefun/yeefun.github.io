let navbar = new Vue({
    el: 'nav',
    methods: {
        all(evt) {
            this.active(evt);
        },
        inProgress(evt) {
            this.active(evt);
        },
        active(evt) {
            let navItems = document.getElementsByClassName('item');
            Array.from(navItems).forEach(item => item.classList.remove('active'));
            evt.currentTarget.classList.add('active');
        },
    }

});

let todos = new Vue({
    el: '#todos',
    data: {
        notAdd: true,
        newTodo: {
            title: '',
            star: false,
            completed: false,
            date: '',
            time: '',
            fileName: '',
            fileUploadDate: '',
            comment: ''
        },
        backupTodos: [{
            title: '',
            date: '',
            time: '',
            fileName: '',
            fileUploadDate: '',
            comment: ''
        }],
        todos: [{
            title: '',
            open: false,
            star: false,
            completed: false,
            date: '',
            time: '',
            fileName: '',
            fileUploadDate: '',
            comment: ''
        }],
    },
    methods: {
        todoDataTransmit(transmitted, transmitter) {
            transmitted.title = transmitter.title;
            transmitted.date = transmitter.date;
            transmitted.time = transmitter.time;
            transmitted.fileName = transmitter.fileName;
            transmitted.fileUploadDate = transmitter.fileUploadDate;
            transmitted.comment = transmitter.comment;
        },
        todoAdd() {
            this.notAdd = true;
            let newTodo = {
                title: this.newTodo.title,
                open: false,
                star: this.newTodo.star,
                date: this.newTodo.date,
                time: this.newTodo.time,
                fileName: this.newTodo.fileName,
                fileUploadDate: this.newTodo.fileUploadDate,
                comment: this.newTodo.comment,
            }
            let backupTodo = {
                title: '',
                date: '',
                time: '',
                fileName: '',
                fileUploadDate: '',
                comment: ''
            }
            this.todos.unshift(newTodo);
            this.backupTodos.unshift(backupTodo);

            for (let p in this.newTodo) {
                p === 'star' || p === 'completed' ? this.newTodo[p] = false : this.newTodo[p] = '';
            }
        },
        newTodoCancel() {
            this.notAdd = true;
            for (let p in this.newTodo) {
                p === 'star' || p === 'completed' ? this.newTodo[p] = false : this.newTodo[p] = '';
            }
        },
        todoEdit(idx) {
            let todo = this.todos[idx];
            let backup = this.backupTodos[idx];

            todo.open = true;

            // 資料備份;
            this.todoDataTransmit(backup, todo);
        },
        // todoSave(idx) {
        //     this.todos[idx].open = false;
        // },
        todoCancel(idx) {
            let todo = this.todos[idx];
            let backup = this.backupTodos[idx];
            todo.open = false;
            
            // 資料還原;
            this.todoDataTransmit(todo, backup);
        },
        todoCompleted(evt, idx) {
            this.todos[idx].completed = true;
            let checked = evt.currentTarget.checked;
            let inputTitle = evt.currentTarget.nextSibling.nextSibling.nextSibling.nextSibling;
            if (checked)
                inputTitle.readOnly = true;
            else
                inputTitle.readOnly = false;
        },
        setCalendar(idx) {
            let todo = this.todos[idx];
            let date = todo.date.replace(/-/g, '/');
            return `${date} ${todo.time}`;
        },
        fileClick(evt) {
            evt.currentTarget.previousSibling.previousSibling.click();
        },
        fileSelected(evt, idx) {
            let todo = this.todos[idx];
            let file = evt.target.files[0];
            let now = new Date();
            let month = now.getMonth() + 1;
            let day = now.getDate();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let date = `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day} ${hours}:${minutes}`;

            if(typeof(idx) !== 'undefined') {
                todo.fileName = file.name;
                todo.fileUploadDate = `上傳時間 ${date}`;
            } else {
                this.newTodo.fileName = file.name;
                this.newTodo.fileUploadDate = `上傳時間 ${date}`;
            }
        },
    }
});