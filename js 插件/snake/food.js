(function () {
    var container;//用于储存之前的食物
    function Food(option) {
        option = option || {};
        this.width = option.width || 20;
        this.height = option.height || 20;
        this.bgc = option.bgc || 'orange';
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.borderRadius = option.borderRadius || 10;
    }

    Food.prototype.render = function () {
        if(container){
            map.removeChild(container);
        }
        var food = document.createElement('div');
        container = food;
        food.style.width=this.width+"px";
        food.style.height=this.height+"px";
        food.style.backgroundColor=this.bgc;
        food.style.position='absolute';

        this.x=Tool.getRandom(0,(map.offsetWidth/this.width-1))*this.width;
        this.y=Tool.getRandom(0,(map.offsetHeight/this.height-1))*this.height;

        food.style.left=this.x+"px";
        food.style.top=this.y+"px";
        food.style.borderRadius=this.borderRadius+"px";

        map.appendChild(food);
    };

    window.Food = Food;
})();