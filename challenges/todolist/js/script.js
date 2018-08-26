let navbar = new Vue({
    el: 'nav',

    methods: {
        active(evt) {
            let navItems = document.querySelectorAll('.item');

            // 1.先把所有 '.active' 移除掉;
            Array.from(navItems).forEach(item => {
                item.classList.remove('active');
            });
            // 2.再為現在點擊的欄目加上 '.active';
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
        // 控制第一個 todo 的 '.edit-zero';
        todoOrderZero: false,

        // 綁定 todo 的 class;
        todoModes(idx) {
            let todo = this.todos[idx];
            return {
                edit: todo.open,
                'edit-zero': todo.open && this.todoOrderZero,
                'icon-empty': !(todo.date || todo.time || todo.fileName || todo.comment) || todo.open,
                // 控制點擊 nav .item 後，哪些 todo 要顯示;
                hide: (this.modes.inProgress && todo.completed) || (this.modes.completed && !todo.completed)
            }
        },

        // 控制 nav .item 的狀態;
        modes: {
            completed: false,
            inProgress: false
        },

        // 控制是否顯示 #todos__new;
        notAdd: true,

        // 放置 #todos__add 的資料;
        newTodo: {
            title: '',
            star: false,
            date: '',
            time: '',
            fileName: '',
            fileUploadDate: '',
            comment: ''
        },

        // 放置 #todos__todo 的資料;
        todos: [],

        // 放置 #todos__todo 的備份資料（這樣按下取消時才能還原）; 
        // 備份資料裡不用放 open, order, star, completed（因為這些在 .menu-head 就能操作，不歸 .menu-body 管）;
        backupTodos: [],

        // 放置被拖曳者 element;
        dragged: null,

        // 放置被拖曳者在資料 todos 中的 index;
        draggedIdx: ''
    },

    computed: {
        // 控制 #todos__remain 內的文字;
        todoRemain() {
            let completedNum = this.todos.filter(todo => todo.completed === true);
            if (this.modes.completed)
                return `完成了 ${completedNum.length} 件任務`;
            else
                return `還剩 ${this.todos.length - completedNum.length} 件任務`;
        }
    },

    created() {
        if (localStorage.todos) {
            this.todos = JSON.parse(localStorage.todos);
            this.backupTodos = JSON.parse(localStorage.todos);
        } else {
            let todos = [{
                title: '',
                order: 0,
                open: false,
                star: false,
                completed: false,
                date: '',
                time: '',
                fileName: '',
                fileUploadDate: '',
                comment: ''
            }];
            let backupTodos = [{
                date: '',
                time: '',
                fileName: '',
                fileUploadDate: '',
                comment: ''
            }];
            localStorage.todos = JSON.stringify(todos);
            this.todos = todos;
            this.backupTodos = backupTodos;
        }
    },

    mounted() {
        // 在 todos.$el 綁到 html 後，讓 checked todo title 唯讀;
        this.todos.forEach((todo, idx) => {
            if (todo.completed) {
                document.getElementById(`title${idx}`).readOnly = true;
            }
        });
    },

    methods: {
        // 使用於備份與還原;
        todoDataTransmit(transmitted, transmitter) {
            transmitted.date = transmitter.date;
            transmitted.time = transmitter.time;
            transmitted.fileName = transmitter.fileName;
            transmitted.fileUploadDate = transmitter.fileUploadDate;
            transmitted.comment = transmitter.comment;
        },

        // 打開新增任務;
        todoAddClick() {
            // 1.先將打開的 todo 關掉;
            if (document.querySelector('.menu-body.open')) {
                document.querySelector('.menu-body.open .save').click();
            }
            // 2.再打開 #todos__add;
            this.notAdd = false;

            // 將 #todos__add title focus;
            document.getElementById('new-title').focus();
        },

        // 新增任務;
        todoAdd() {
            this.notAdd = true;

            // 創建一個新的 todo;
            let newTodo = {
                title: this.newTodo.title,
                order: 0, // 新增 todo order 為 0（最前面）;
                open: false,
                star: this.newTodo.star,
                completed: false,
                date: this.newTodo.date,
                time: this.newTodo.time,
                fileName: this.newTodo.fileName,
                fileUploadDate: this.newTodo.fileUploadDate,
                comment: this.newTodo.comment,
            }

            // 創建一個新的 todo 備份;
            let backupTodo = {
                title: '',
                date: '',
                time: '',
                fileName: '',
                fileUploadDate: '',
                comment: ''
            }

            // 先將目前在場的 todo order 都加 1;
            this.todos.forEach(todo => {
                todo.order += 1;
            });

            // 讓 localStorage 的 order 值都加 1;
            let localTodos = JSON.parse(localStorage.todos);
            localTodos.forEach(localTodo => {
                localTodo.order += 1;
            });
            localStorage.todos = JSON.stringify(localTodos);

            // 將新 todo 插入陣列最前面;
            this.todos.unshift(newTodo);
            // 將新 todo 備份插入陣列最前面;
            this.backupTodos.unshift(backupTodo);

            // 將新 todo 存到 localStorage;
            localTodos.unshift(newTodo);
            localStorage.todos = JSON.stringify(localTodos);

            // 將 newTodo reset;
            for (let p in this.newTodo) {
                p === 'star' || p === 'completed' ? this.newTodo[p] = false : this.newTodo[p] = '';
            }
        },

        // 取消新增任務;
        newTodoCancel() {
            this.notAdd = true;

            // 將 newTodo reset;
            for (let p in this.newTodo) {
                p === 'star' || p === 'completed' ? this.newTodo[p] = false : this.newTodo[p] = '';
            }
        },

        // 編輯 todo;
        todoEdit(evt, idx) {
            let todo = this.todos[idx];
            let backup = this.backupTodos[idx];

            // 1.先將打開的 todo 關掉;
            if (document.querySelector('.menu-body.open')) {
                document.querySelector('.menu-body.open .save').click();
            }
            // 2.再開目前要編輯的;
            todo.open = true;

            // 判斷此 todo 是否為排在最前面的 todo;
            let todoOrder = evt.currentTarget.parentNode.parentNode.parentNode.style.order;
            if (todoOrder === '0')
                this.todoOrderZero = true;
            else
                this.todoOrderZero = false;

            // 資料備份;
            this.todoDataTransmit(backup, todo);
        },

        // 儲存 todo;
        todoSave(idx) {
            let todo = this.todos[idx];
            todo.open = false;

            // 把改動的 todo 存到 localStorage;
            let localTodos = JSON.parse(localStorage.todos);
            localTodos[idx] = todo;
            localStorage.todos = JSON.stringify(localTodos);
        },

        // 取消編輯 todo;
        todoCancel(idx) {
            let todo = this.todos[idx];
            let backup = this.backupTodos[idx];
            todo.open = false;

            // 資料還原;
            this.todoDataTransmit(todo, backup);
        },

        // 編輯 todo 的名稱;
        todoTitled(idx) {
            let todo = this.todos[idx];
            let localTodos = JSON.parse(localStorage.todos);

            // 更動 localStorage 的 title 值;
            localTodos[idx].title = todo.title;
            localStorage.todos = JSON.stringify(localTodos);
        },

        // 把 todo 打星號;
        todoStarred(idx) {
            let todo = this.todos[idx];
            let localTodos = JSON.parse(localStorage.todos);

            todo.star = !todo.star;

            if (todo.star) {
                // 更動 localStorage 的 star 值;
                localTodos[idx].star = true;
                localStorage.todos = JSON.stringify(localTodos);
            } else {
                // 更動 localStorage 的 star 值;
                localTodos[idx].star = false;
                localStorage.todos = JSON.stringify(localTodos);
            }
        },

        // 完成 todo;
        todoCompleted(idx) {
            let todo = this.todos[idx];
            let inputTitle = document.getElementById(`title${idx}`);
            let localTodos = JSON.parse(localStorage.todos);

            if (todo.completed) {
                inputTitle.readOnly = true;

                // 更動 localStorage 的 completed 值;
                localTodos[idx].completed = true;
                localStorage.todos = JSON.stringify(localTodos);
            } else {
                inputTitle.readOnly = false;

                // 更動 localStorage 的 completed 值;
                localTodos[idx].completed = false;
                localStorage.todos = JSON.stringify(localTodos);
            }
        },

        // 設定出現在 .menu-head__icon 的時間格式;
        setCalendar(idx) {
            let todo = this.todos[idx];
            let date = todo.date.replace(/-/g, '/');
            return `${date} ${todo.time}`;
        },

        // 按下 + 新增文件;
        fileClick(evt) {
            evt.currentTarget.previousSibling.click();
        },

        // 新增文件;
        fileSelected(evt, idx) {
            let todo = this.todos[idx];
            let file = evt.target.files[0];
            let now = new Date();
            let month = now.getMonth() + 1;
            let day = now.getDate();
            let hours = now.getHours();
            let minutes = now.getMinutes();

            // 設定時間格式;
            let date = `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day} ${hours}:${minutes}`;

            // 判斷按下文件的是 new todo 或目前的 todo;
            if (typeof idx !== 'undefined') {
                todo.fileName = file.name;
                todo.fileUploadDate = `上傳時間 ${date}`;
            } else {
                this.newTodo.fileName = file.name;
                this.newTodo.fileUploadDate = `上傳時間 ${date}`;
            }
        },

        // drag source 被拖曳開始;
        dragStart(evt, draggedIdx) {
            // Firefox 要加，不然會不 work！
            evt.dataTransfer.setData('text/plain', null);

            // 取得被拖曳者的 element、index;
            this.dragged = evt.currentTarget;
            this.draggedIdx = draggedIdx;

            evt.currentTarget.style.setProperty('transform', 'perspective(400px) translateY(-4px) rotate(-1.6deg) scale(1.001) rotateX(-4deg)');
            evt.currentTarget.style.boxShadow = '2px 2px 16px rgba(0, 0, 0, 0.2)';
            evt.currentTarget.style.zIndex = '99';
        },

        // drag source 被拖曳結束;
        dragEnd(evt) {
            evt.currentTarget.style.transform = 'none';
            evt.currentTarget.style.boxShadow = 'none';
            evt.currentTarget.style.zIndex = 'auto';
        },

        // drop target 被進入;
        dragEnter(evt) {
            evt.preventDefault();
        },

        // drop target 被滑過;
        dragOver(evt) {
            evt.preventDefault();
        },

        // drop target 被放進;
        drop(evt, droppedIdx) {
            evt.preventDefault();
            // 交換彼此的 style.order 屬性值;
            this.orderExchange(evt, droppedIdx);
        },

        // drag 與 drop 交換彼此 style.order 屬性值;
        orderExchange(evt, droppedIdx) {
            let dropped = evt.currentTarget;
            let dragged = this.dragged;
            let newOrder = dropped.style.order;
            let oldOrder = dragged.style.order;
            let localTodos = JSON.parse(localStorage.todos);

            dropped.style.order = oldOrder;
            dragged.style.order = newOrder;

            // 除了交換 css 的，也要交換在 todos 資料裡的，也要更動 localStorage 的 order 值;
            localTodos[droppedIdx].order = this.todos[droppedIdx].order = parseInt(oldOrder, 10);
            localTodos[this.draggedIdx].order = this.todos[this.draggedIdx].order = parseInt(newOrder, 10);
            localStorage.todos = JSON.stringify(localTodos);
        }
    }
});