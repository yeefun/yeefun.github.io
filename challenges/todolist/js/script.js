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
        todoOrderZero: false,
        todoModes(idx) {
            let todo = this.todos[idx];
            return {
                edit: todo.open,
                'edit-zero': todo.open && this.todoOrderZero,
                'icon-empty': !(todo.date || todo.time || todo.file || todo.comment) || todo.open,
                hide: (this.modes.inProgress && todo.completed) || (this.modes.completed && !todo.completed)
            }
        },
        modes: {
            completed: false,
            inProgress: false
        },
        notAdd: true,
        newTodo: {
            title: '',
            star: false,
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
        todoDragged: null
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
        todoAddClick() {
            this.notAdd = false;
            document.getElementById('new-title').focus();
            this.todos.forEach(todo => {
                todo.open = false;
            });
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
        todoEdit(evt, idx) {
            let todo = this.todos[idx];
            let backup = this.backupTodos[idx];

            // 1.先將所有 todo 關掉;
            this.todos.forEach(todo => {
                todo.open = false;
            });
            // 2.再開目前要編輯的;
            todo.open = true;

            let todoOrder = evt.currentTarget.parentNode.parentNode.parentNode.style.order;
            if (todoOrder === '0')
                this.todoOrderZero = true;
            else
                this.todoOrderZero = false;

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
            // Firefox 要加，不然會不 work！
            evt.dataTransfer.setData('text/plain', null);
            
            this.todoDragged = evt.currentTarget;
            evt.currentTarget.style.setProperty('transform', 'perspective(400px) translateY(-4px) rotate(-1.6deg) scale(1.001) rotateX(-4deg)');
            evt.currentTarget.style.boxShadow = '2px 2px 16px rgba(0, 0, 0, 0.2)';
            evt.currentTarget.style.zIndex = '99';
        },
        dragEnd(evt) {
            evt.currentTarget.style.transform = 'none';
            evt.currentTarget.style.boxShadow = 'none';
            evt.currentTarget.style.zIndex = 'auto';
        },
        dragEnter(evt) {
            evt.preventDefault();
        },
        dragOver(evt) {
            evt.preventDefault();
        },
        drop(evt) {
            evt.preventDefault();
            this.orderExchange(evt);
        },
        index(node) {
            let children = node.parentNode.childNodes;
            for (let i = 0; i < children.length; i++) {
                if (children[i] === node) return i;
            }
        },
        orderExchange(evt) {
            let dropped = evt.currentTarget;
            let dragged = this.todoDragged
            let newOrder = dropped.style.order;
            let oldOrder = dragged.style.order;
            dropped.style.order = oldOrder;
            dragged.style.order = newOrder;
        }
    }
});