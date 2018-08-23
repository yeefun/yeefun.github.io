let navbar = new Vue({
    el: 'nav',
    methods: {
        active(evt) {
            let navItems = document.querySelectorAll('.item');
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
            title: '吃飯',
            date: '2018-08-23',
            time: '18:30',
            fileName: '',
            fileUploadDate: '',
            comment: '吃不會拉肚子的'
        },{
            title: '把拖曳效果做出來！',
            date: '2018-08-23',
            time: '16:40',
            fileName: '',
            fileUploadDate: '',
            comment: ''
        },{
            title: '把大頭貼改成大象圖案',
            date: '',
            time: '',
            fileName: 'elephant (3).png',
            fileUploadDate: '上傳時間 08/23 16:42',
            comment: '大象就是帥！'
        }],
        todos: [{
            title: '吃飯',
            open: false,
            star: false,
            completed: false,
            date: '2018-08-23',
            time: '18:30',
            fileName: '',
            fileUploadDate: '',
            comment: '吃不會拉肚子的'
        },{
            title: '把拖曳效果做出來！',
            open: false,
            star: true,
            completed: false,
            date: '2018-08-23',
            time: '16:40',
            fileName: '',
            fileUploadDate: '',
            comment: ''
        },{
            title: '把大頭貼改成大象圖案',
            open: false,
            star: false,
            completed: true,
            date: '',
            time: '',
            fileName: 'elephant (3).png',
            fileUploadDate: '上傳時間 08/23 16:42',
            comment: '大象就是帥！'
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
    mounted() {
        this.todos.forEach((todo, idx) => {
            if (todo.completed) {
                document.getElementById(`title${idx}`).readOnly = true;
            }
        });
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
        todoCompleted(evt, idx) {
            let checked = evt.currentTarget.checked;
            let inputTitle = document.getElementById(`title${idx}`);
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

            if(typeof idx !== 'undefined') {
                todo.fileName = file.name;
                todo.fileUploadDate = `上傳時間 ${date}`;
            } else {
                this.newTodo.fileName = file.name;
                this.newTodo.fileUploadDate = `上傳時間 ${date}`;
            }
        },
        dragStart(evt) {
            let oldIdx = this.index(evt.currentTarget);
            evt.dataTransfer.setData('text/plain', oldIdx);
            evt.currentTarget.style.boxShadow = '4px 4px 16px rgba(0, 0, 0, 0.4)';
        },
        drag(evt) {
            evt.currentTarget.style.boxShadow = '4px 4px 16px rgba(0, 0, 0, 0.4)';
            // evt.currentTarget.removeEventListener('dragleave', this.dragLeave);
        },
        dragEnd(evt) {
            evt.currentTarget.style.boxShadow = 'none';
        },
        drop(evt) {
            evt.preventDefault();
            let oldIdx = evt.dataTransfer.getData('text/plain');
            let dropped = evt.currentTarget;
            let dragged = dropped.parentNode.childNodes[oldIdx];
            let newOrder = dropped.style.order;
            let oldOrder = dragged.style.order;
            dropped.style.order = oldOrder;
            dropped.style.boxShadow = 'none';
            dragged.style.order = newOrder;
        },
        dragEnter(evt) {
            evt.preventDefault();
            evt.currentTarget.style.boxShadow = '4px 4px 16px rgba(0, 0, 0, 0.4)';
        },
        dragOver(evt) {
            evt.preventDefault();
        },
        dragLeave(evt) {
            evt.preventDefault();
            evt.currentTarget.style.boxShadow = 'none';
        },
        index(node) {
            let children = node.parentNode.childNodes;
            for (let i = 0; i < children.length; i++) {
                if (children[i] === node) return i;
            }
        }
    }
});