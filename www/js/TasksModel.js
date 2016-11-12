function getTasks(){
    this.items = [
        {nome:'Item 01', finalizada: false}, 
        {nome:'Item 02', finalizada:false}, 
        {nome:'Item 03', finalizada:false}
        ];

    this.add = function(item){
        this.items.push(item);
    };

    this.remove = function(item){
        var pos = this.items.indexOf(item);
        this.items.splice(pos, 1);
    };
}