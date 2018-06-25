(function () {
    var timeid;

    function Game() {
        this.snake = new Snake();
        this.food = new Food();
    }

    Game.prototype.start = function () {
        this.snake.render();
        this.food.render();
        timeid = setInterval(function () {
            this.snake.move();
            var snakeHead = this.snake.body[0],
                maxX = map.offsetWidth / this.snake.width - 1,
                maxY = map.offsetHeight / this.snake.height - 1;
            if (snakeHead.x < 0 || snakeHead.x > maxX || snakeHead.y < 0 || snakeHead.y > maxY) {
                clearInterval(timeid);
                return;
            }

            var snakeX = snakeHead.x * this.snake.width,
                snakeY = snakeHead.y * this.snake.height,
                foodX = this.food.x,
                foodY = this.food.y;
            if (snakeX === foodX && snakeY === foodY) {
                this.food.render();
                var last = this.snake.body[this.snake.body.length - 1];
                this.snake.body.push({
                    x: last.x,
                    y: last.y,
                    col: last.col
                });
            }
            this.snake.render();
        }.bind(this), 150);

        document.onkeydown = function (e) {
            var e = e || window.event;
            switch (e.keyCode) {
                case 37:
                    if (this.snake.direction === 'right') {
                        return;
                    }
                    this.snake.direction = 'left';
                    break;
                case 38:
                    if (this.snake.direction === 'bottom') {
                        return;
                    }
                    this.snake.direction = 'top';
                    break;
                case 39:
                    if (this.snake.direction === 'left') {
                        return;
                    }
                    this.snake.direction = 'right';
                    break;
                case 40:
                    if (this.snake.direction === 'top') return;
                    this.snake.direction = 'bottom';
                    break;
            }
        }.bind(this);
    };
    window.Game = Game;
})();