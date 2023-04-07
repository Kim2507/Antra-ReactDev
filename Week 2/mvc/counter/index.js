class CounterModel{
    constructor(){
        this.count = 0;
    }

    increment(){
        this.count +=1;
    }
}

class CounterView{
    constructor(){
        this.count = document.querySelector(".counter__count");
        this.plusBtn = document.querySelector(".counter__plus");
    }

    updateCount(newCount){
        this.count.innerText = newCount;
    }
}

class CounterController{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.setUpEvents();
    }

    setUpEvents(){
        this.setUpAddEvent();
    }

    setUpAddEvent(){
        this.view.plusBtn.addEventListener("click",(e) =>{
            this.addCount();
        });
    }

    addCount(){
        this.model.increment();
        this.view.updateCount(this.model.count);
    }
}

const model = new CounterModel();
const view = new CounterView();
const controller = new CounterController(model,view);