function dragStart(ev)
           {
            ev
            .dataTransfer
            .setData('text/plain', ev.target.id);
        
         // ev
         //   .currentTarget
         //   .style
         //   .backgroundColor = 'yellow';
           }

function dragEnter(ev)
           {
           var idelt = ev.dataTransfer.getData("Text");
           return true;
           }

function dragOver(ev)
           {
       //    var idelt = ev.dataTransfer.getData("Text");
        //   var id = ev.target.getAttribute('id');
           ev.preventDefault();
       //   return false;
           }

function dragEnd(ev)
           {
           ev.dataTransfer.clearData("Text");
           return true
           }

function dragDrop(ev)

           {
            const id = ev
            .dataTransfer
            .getData('text');
            const draggableElement = document.getElementById(id);
            const dropzone = event.target;
            dropzone.appendChild(draggableElement);
            ev
            .dataTransfer
            .clearData();
           }

           function dragOver1(ev)
           {
       //    var idelt = ev.dataTransfer.getData("Text");
        //   var id = ev.target.getAttribute('id');
           ev.preventDefault();
           ev
           .currentTarget
           .style
           .backgroundColor = 'yellow';
       //   return false;
           }
           function dragOver2(ev)
           {
       //    var idelt = ev.dataTransfer.getData("Text");
        //   var id = ev.target.getAttribute('id');
           ev.preventDefault();
           ev
           .currentTarget
           .style
           .backgroundColor = 'green';
       //   return false;
           }
           function dragOver3(ev)
           {
       //    var idelt = ev.dataTransfer.getData("Text");
        //   var id = ev.target.getAttribute('id');
           ev.preventDefault();
           ev
           .currentTarget
           .style
           .backgroundColor = 'silver';
       //   return false;
           }

