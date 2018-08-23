let navbar = new Vue({
    el: 'nav',
    methods: {
        active(evt) {
            let navItems = document.getElementsByClassName('item');
            Array.from(navItems).forEach(item => {
                item.classList.remove('active')
            });
            evt.currentTarget.classList.add('active');
        },
        all(evt) {
            this.active(evt);
            todos.modes.inProgress = false;
            todos.modes.completed = false;
        },
        inProgress(evt) {
            this.active(evt);
            todos.modes.inProgress = true;
            todos.modes.completed = false;
        },
        completed(evt) {
            this.active(evt);
            todos.modes.inProgress = false;
            todos.modes.completed = true;
        }
    }

});

let todos = new Vue({
    el: '#todos',
    data: {
        modes: {
            completed: false,
            inProgress: false
        },
        notAdd: true,
        newTodo: {
            title: '',
            star: false,
            // completed: false,
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
    computed: {
        todoRemain() {
            let completedNum = this.todos.filter(todo => todo.completed === true);
            if (this.modes.completed)
                return `完成了 ${completedNum.length} 件任務`;
            else
                return `還剩 ${this.todos.length - completedNum.length} 件任務`;
        }
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
        todoModes(idx) {
            let todo = this.todos[idx];
            return {
                edit: todo.open,
                'icon-empty': !(todo.date || todo.time || todo.file || todo.comment) || todo.open,
                hide: (this.modes.inProgress && todo.completed) || (this.modes.completed && !todo.completed)
                // 'in-progress': this.modes.inProgress && todo.completed,
                // completed: this.modes.completed,
            }
        },
        todoAddClick() {
            this.notAdd = false;
            document.getElementById('new-title').focus();
        },
        todoAdd() {
            this.notAdd = true;
            let newTodo = {
                title: this.newTodo.title,
                open: false,
                star: this.newTodo.star,
                completed: false,
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
        todoCancel(idx) {
            let todo = this.todos[idx];
            let backup = this.backupTodos[idx];
            todo.open = false;
            
            // 資料還原;
            this.todoDataTransmit(todo, backup);
        },
        todoCompleted(evt) {
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