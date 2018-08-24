"use strict";var navbar=new Vue({el:"nav",methods:{active:function(e){var t=document.querySelectorAll(".item");Array.from(t).forEach(function(e){e.classList.remove("active")}),e.currentTarget.classList.add("active")},all:function(e){this.active(e),todos.modes.inProgress=!1,todos.modes.completed=!1},inProgress:function(e){this.active(e),todos.modes.inProgress=!0,todos.modes.completed=!1},completed:function(e){this.active(e),todos.modes.inProgress=!1,todos.modes.completed=!0}}}),todos=new Vue({el:"#todos",data:{todoOrderZero:!1,todoModes:function(e){var t=this.todos[e];return{edit:t.open,"edit-zero":t.open&&this.todoOrderZero,"icon-empty":!(t.date||t.time||t.file||t.comment)||t.open,hide:this.modes.inProgress&&t.completed||this.modes.completed&&!t.completed}},modes:{completed:!1,inProgress:!1},notAdd:!0,newTodo:{title:"",star:!1,date:"",time:"",fileName:"",fileUploadDate:"",comment:""},backupTodos:[{title:"吃飯",date:"2018-08-23",time:"18:30",fileName:"",fileUploadDate:"",comment:"吃不會拉肚子的"},{title:"把拖曳效果做出來！",date:"2018-08-23",time:"16:40",fileName:"",fileUploadDate:"",comment:""},{title:"把大頭貼改成大象圖案",date:"",time:"",fileName:"elephant (3).png",fileUploadDate:"上傳時間 08/23 16:42",comment:"大象就是帥！"}],todos:[{title:"吃飯",open:!1,star:!1,completed:!1,date:"2018-08-23",time:"18:30",fileName:"",fileUploadDate:"",comment:"吃不會拉肚子的"},{title:"把拖曳效果做出來！",open:!1,star:!0,completed:!1,date:"2018-08-23",time:"16:40",fileName:"",fileUploadDate:"",comment:""},{title:"把大頭貼改成大象圖案",open:!1,star:!1,completed:!0,date:"",time:"",fileName:"elephant (3).png",fileUploadDate:"上傳時間 08/23 16:42",comment:"大象就是帥！"}],todoDragged:null},computed:{todoRemain:function(){var e=this.todos.filter(function(e){return!0===e.completed});return this.modes.completed?"完成了 "+e.length+" 件任務":"還剩 "+(this.todos.length-e.length)+" 件任務"}},mounted:function(){this.todos.forEach(function(e,t){e.completed&&(document.getElementById("title"+t).readOnly=!0)})},methods:{todoDataTransmit:function(e,t){e.title=t.title,e.date=t.date,e.time=t.time,e.fileName=t.fileName,e.fileUploadDate=t.fileUploadDate,e.comment=t.comment},todoAddClick:function(){this.notAdd=!1,document.getElementById("new-title").focus(),this.todos.forEach(function(e){e.open=!1})},todoAdd:function(){this.notAdd=!0;var e={title:this.newTodo.title,open:!1,star:this.newTodo.star,completed:!1,date:this.newTodo.date,time:this.newTodo.time,fileName:this.newTodo.fileName,fileUploadDate:this.newTodo.fileUploadDate,comment:this.newTodo.comment};for(var t in this.todos.unshift(e),this.backupTodos.unshift({title:"",date:"",time:"",fileName:"",fileUploadDate:"",comment:""}),this.newTodo)this.newTodo[t]="star"!==t&&"completed"!==t&&""},newTodoCancel:function(){for(var e in this.notAdd=!0,this.newTodo)this.newTodo[e]="star"!==e&&"completed"!==e&&""},todoEdit:function(e,t){var o=this.todos[t],n=this.backupTodos[t];this.todos.forEach(function(e){e.open=!1}),o.open=!0;var d=e.currentTarget.parentNode.parentNode.parentNode.style.order;this.todoOrderZero="0"===d,this.todoDataTransmit(n,o)},todoCancel:function(e){var t=this.todos[e],o=this.backupTodos[e];t.open=!1,this.todoDataTransmit(t,o)},todoCompleted:function(e,t){var o=e.currentTarget.checked,n=document.getElementById("title"+t);n.readOnly=!!o},setCalendar:function(e){var t=this.todos[e];return t.date.replace(/-/g,"/")+" "+t.time},fileClick:function(e){e.currentTarget.previousSibling.previousSibling.click()},fileSelected:function(e,t){var o=this.todos[t],n=e.target.files[0],d=new Date,i=d.getMonth()+1,a=d.getDate(),r=(i<10?"0"+i:i)+"/"+(a<10?"0"+a:a)+" "+d.getHours()+":"+d.getMinutes();void 0!==t?(o.fileName=n.name,o.fileUploadDate="上傳時間 "+r):(this.newTodo.fileName=n.name,this.newTodo.fileUploadDate="上傳時間 "+r)},dragStart:function(e){e.dataTransfer.setData("text/plain",null),this.todoDragged=e.currentTarget,e.currentTarget.style.setProperty("transform","perspective(400px) translateY(-4px) rotate(-1.6deg) scale(1.001) rotateX(-4deg)"),e.currentTarget.style.boxShadow="2px 2px 16px rgba(0, 0, 0, 0.2)",e.currentTarget.style.zIndex="99"},dragEnd:function(e){e.currentTarget.style.transform="none",e.currentTarget.style.boxShadow="none",e.currentTarget.style.zIndex="auto"},dragEnter:function(e){e.preventDefault()},dragOver:function(e){e.preventDefault()},drop:function(e){e.preventDefault(),this.orderExchange(e)},index:function(e){for(var t=e.parentNode.childNodes,o=0;o<t.length;o++)if(t[o]===e)return o},orderExchange:function(e){var t=e.currentTarget,o=this.todoDragged,n=t.style.order,d=o.style.order;t.style.order=d,o.style.order=n}}});

//# sourceMappingURL=script-dist.js.map