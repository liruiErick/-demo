(function () {
    var arr = [];

    function Snake(option) {
        option = option || {};
        this.width = option.width || 20;
        this.height = option.height || 20;
        this.body = [
            {x: 3, y: 2, col: 'green'},
            {x: 2, y: 2, col: 'orange'},
            {x: 1, y: 2, col: 'orange'}
        ];
        this.direction = option.direction || 'right';
    }

    Snake.prototype.render = function () {
        for (var i = 0; i < arr.length; i++) {
            map.removeChild(arr[i]);
        }
        arr.splice(0, arr.length);

        this.body.forEach(function (item, index) {
            var snakeNode=document.createElement('div');
            arr.push(snakeNode);
            snakeNode.style.width = this.width + 'px';
            snakeNode.style.height = this.height + 'px';
            snakeNode.style.position = 'absolute';
            snakeNode.style.left = item.x * this.width + 'px';
            snakeNode.style.top = item.y * this.height + 'px';
            snakeNode.style.backgroundColor = item.col;
            map.appendChild(snakeNode);
        });
    };

    Snake.prototype.move = function () {
        //3-1 ??????????????
        for (var i = this.body.length -1; i >0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //   3-2????????????
        //     this.body[0].x +=1;
        //
        //3-2???????????,?????????????????
        switch(this.direction){

            case 'left':
                this.body[0].x -= 1;
                break;
            case 'right':
                this.body[0].x += 1;
                break;
            case 'top':
                this.body[0].y -= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;
        }
    };

    window.Snake = Snake;
})();