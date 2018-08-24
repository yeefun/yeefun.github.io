'use strict';

var navbar = new Vue({
    el: 'nav',
    methods: {
        active: function active(evt) {
            var navItems = document.querySelectorAll('.item');
            Array.from(navItems).forEach(function (item) {
                item.classList.remove('active');
            });
            evt.currentTarget.classList.add('active');
        },
        all: function all(evt) {
            this.active(evt);
            todos.modes.inProgress = false;
            todos.modes.completed = false;
        },
        inProgress: function inProgress(evt) {
            this.active(evt);
            todos.modes.inProgress = true;
            todos.modes.completed = false;
        },
        completed: function completed(evt) {
            this.active(evt);
            todos.modes.inProgress = false;
            todos.modes.completed = true;
        }
    }
});

var todos = new Vue({
    el: '#todos',
    data: {
        todoOrderZero: false,
        todoModes: function todoModes(idx) {
            var todo = this.todos[idx];
            return {
                edit: todo.open,
                'edit-zero': todo.open && this.todoOrderZero,
                'icon-empty': !(todo.date || todo.time || todo.file || todo.comment) || todo.open,
                hide: this.modes.inProgress && todo.completed || this.modes.completed && !todo.completed
            };
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
        }, {
            title: '把拖曳效果做出來！',
            date: '2018-08-23',
            time: '16:40',
            fileName: '',
            fileUploadDate: '',
            comment: ''
        }, {
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
        }, {
            title: '把拖曳效果做出來！',
            open: false,
            star: true,
            completed: false,
            date: '2018-08-23',
            time: '16:40',
            fileName: '',
            fileUploadDate: '',
            comment: ''
        }, {
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
        todoRemain: function todoRemain() {
            var completedNum = this.todos.filter(function (todo) {
                return todo.completed === true;
            });
            if (this.modes.completed) return '\u5B8C\u6210\u4E86 ' + completedNum.length + ' \u4EF6\u4EFB\u52D9';else return '\u9084\u5269 ' + (this.todos.length - completedNum.length) + ' \u4EF6\u4EFB\u52D9';
        }
    },
    mounted: function mounted() {
        this.todos.forEach(function (todo, idx) {
            if (todo.completed) {
                document.getElementById('title' + idx).readOnly = true;
            }
        });
    },

    methods: {
        todoDataTransmit: function todoDataTransmit(transmitted, transmitter) {
            transmitted.title = transmitter.title;
            transmitted.date = transmitter.date;
            transmitted.time = transmitter.time;
            transmitted.fileName = transmitter.fileName;
            transmitted.fileUploadDate = transmitter.fileUploadDate;
            transmitted.comment = transmitter.comment;
        },
        todoAddClick: function todoAddClick() {
            this.notAdd = false;
            document.getElementById('new-title').focus();
            this.todos.forEach(function (todo) {
                todo.open = false;
            });
        },
        todoAdd: function todoAdd() {
            this.notAdd = true;
            var newTodo = {
                title: this.newTodo.title,
                open: false,
                star: this.newTodo.star,
                completed: false,
                date: this.newTodo.date,
                time: this.newTodo.time,
                fileName: this.newTodo.fileName,
                fileUploadDate: this.newTodo.fileUploadDate,
                comment: this.newTodo.comment
            };
            var backupTodo = {
                title: '',
                date: '',
                time: '',
                fileName: '',
                fileUploadDate: '',
                comment: ''
            };
            this.todos.unshift(newTodo);
            this.backupTodos.unshift(backupTodo);

            for (var p in this.newTodo) {
                p === 'star' || p === 'completed' ? this.newTodo[p] = false : this.newTodo[p] = '';
            }
        },
        newTodoCancel: function newTodoCancel() {
            this.notAdd = true;
            for (var p in this.newTodo) {
                p === 'star' || p === 'completed' ? this.newTodo[p] = false : this.newTodo[p] = '';
            }
        },
        todoEdit: function todoEdit(evt, idx) {
            var todo = this.todos[idx];
            var backup = this.backupTodos[idx];

            // 1.先將所有 todo 關掉;
            this.todos.forEach(function (todo) {
                todo.open = false;
            });
            // 2.再開目前要編輯的;
            todo.open = true;

            var todoOrder = evt.currentTarget.parentNode.parentNode.parentNode.style.order;
            if (todoOrder === '0') this.todoOrderZero = true;else this.todoOrderZero = false;

            // 資料備份;
            this.todoDataTransmit(backup, todo);
        },
        todoCancel: function todoCancel(idx) {
            var todo = this.todos[idx];
            var backup = this.backupTodos[idx];
            todo.open = false;

            // 資料還原;
            this.todoDataTransmit(todo, backup);
        },
        todoCompleted: function todoCompleted(evt, idx) {
            var checked = evt.currentTarget.checked;
            var inputTitle = document.getElementById('title' + idx);
            if (checked) inputTitle.readOnly = true;else inputTitle.readOnly = false;
        },
        setCalendar: function setCalendar(idx) {
            var todo = this.todos[idx];
            var date = todo.date.replace(/-/g, '/');
            return date + ' ' + todo.time;
        },
        fileClick: function fileClick(evt) {
            evt.currentTarget.previousSibling.previousSibling.click();
        },
        fileSelected: function fileSelected(evt, idx) {
            var todo = this.todos[idx];
            var file = evt.target.files[0];
            var now = new Date();
            var month = now.getMonth() + 1;
            var day = now.getDate();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var date = (month < 10 ? '0' + month : month) + '/' + (day < 10 ? '0' + day : day) + ' ' + hours + ':' + minutes;

            if (typeof idx !== 'undefined') {
                todo.fileName = file.name;
                todo.fileUploadDate = '\u4E0A\u50B3\u6642\u9593 ' + date;
            } else {
                this.newTodo.fileName = file.name;
                this.newTodo.fileUploadDate = '\u4E0A\u50B3\u6642\u9593 ' + date;
            }
        },
        dragStart: function dragStart(evt) {
            // Firefox 要加，不然會不 work！
            evt.dataTransfer.setData('text/plain', null);

            this.todoDragged = evt.currentTarget;
            evt.currentTarget.style.setProperty('transform', 'perspective(400px) translateY(-4px) rotate(-1.6deg) scale(1.001) rotateX(-4deg)');
            evt.currentTarget.style.boxShadow = '2px 2px 16px rgba(0, 0, 0, 0.2)';
            evt.currentTarget.style.zIndex = '99';
        },
        dragEnd: function dragEnd(evt) {
            evt.currentTarget.style.transform = 'none';
            evt.currentTarget.style.boxShadow = 'none';
            evt.currentTarget.style.zIndex = 'auto';
        },
        dragEnter: function dragEnter(evt) {
            evt.preventDefault();
        },
        dragOver: function dragOver(evt) {
            evt.preventDefault();
        },
        drop: function drop(evt) {
            evt.preventDefault();
            this.orderExchange(evt);
        },
        index: function index(node) {
            var children = node.parentNode.childNodes;
            for (var i = 0; i < children.length; i++) {
                if (children[i] === node) return i;
            }
        },
        orderExchange: function orderExchange(evt) {
            var dropped = evt.currentTarget;
            var dragged = this.todoDragged;
            var newOrder = dropped.style.order;
            var oldOrder = dragged.style.order;
            dropped.style.order = oldOrder;
            dragged.style.order = newOrder;
        }
    }
});

//# sourceMappingURL=script-dist.js.map