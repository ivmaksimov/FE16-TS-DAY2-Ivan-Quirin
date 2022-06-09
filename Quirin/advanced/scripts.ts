var g_id = 0;
class Vehicle{

    id:string;

    constructor(
        public name: string, public kmLeft: number, public seats:number, public fuel:string, public prodYear:number, 
    ){
        this.id = this.createID();
    }

    createID(){
        g_id++;
        return "c"+g_id;
    }

    calculatePrice(){
        return (this.kmLeft*0.01 + this.seats*2.1 + this.prodYear*10);
    }

    createCard(custom:string=""){
        return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${this.prodYear}</h6>
                    
                    <div class="collapse" id="${this.id}">
                        <p class="card-text">
                            ${this.seats} seats
                            <br /> 
                            ${this.kmLeft} km left
                            <br/> 
                            Fuel type: ${this.fuel}
                            <br/> 
                            ${this.kmLeft} km left
                           
                        </p>
                        <p class="card-text">
                            ${custom}
                        </p>
                        <p class="card-text">
                            <span class="fw-bold">Price: </span>${this.calculatePrice()} €
                        </p>
                    </div>
                    <button class="btn btn-outline-dark mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#${this.id}" aria-expanded="false" aria-controls="collapseExample">
                        Details
                    </button>
                </div>
            </div>
        `;
    }
}

class Car extends Vehicle{
    constructor(
        public name: string, public kmLeft: number, public seats:number, public fuel:string, public prodYear:number, 
    ){
        super(name, kmLeft, seats, fuel, prodYear);
    }

    output(){
        return this.createCard("I am a car");
    }
}
class Truck extends Vehicle{
    constructor(
        public name: string, public kmLeft: number, public seats:number, public fuel:string, public prodYear:number, 
    ){
        super(name, kmLeft, seats, fuel, prodYear);
    }

    output(){
        return this.createCard("I am a truck");
    }
}
class Bicycle extends Vehicle{
    constructor(
        public name: string, public kmLeft: number, public seats:number, public fuel:string, public prodYear:number, 
    ){
        super(name, kmLeft, seats, fuel, prodYear);
    }

    output(){
        return this.createCard("I am a Bicycle");
    }
}
class Motorcycle extends Vehicle{
    constructor(
        public name: string, public kmLeft: number, public seats:number, public fuel:string, public prodYear:number, 
    ){
        super(name, kmLeft, seats, fuel, prodYear);
    }

    output(){
        return this.createCard("I am a motorcycle");
    }
}

var carsContainer = document.getElementById('carsContainer');
var trucksContainer = document.getElementById('trucksContainer');
var bicyclesContainer = document.getElementById('bicyclesContainer');
var motorcyclesContainer = document.getElementById('motorcyclesContainer');


let cars: Car[] = [];
cars.push(new Car("GT", 12, 12, "Super", 1972));
cars.push(new Car("FT-300", 12, 12, "Super", 1972));
cars.push(new Car("Samba-Mama", 12, 12, "Super", 1972));
cars.push(new Car("Samba-Mama 2", 12, 12, "Super", 1972));
cars.push(new Car("Hot Wheels Unlimited", 12, 12, "Super", 1972));
cars.forEach((e)=>carsContainer.innerHTML += e.output());

let trucks: Truck[] = [];
trucks.push(new Truck("FT", 12, 12, "Super", 1972));
trucks.push(new Truck("MT-300", 12, 12, "Super", 1972));
trucks.push(new Truck("Mamba-Mama", 12, 12, "Super", 1972));
trucks.push(new Truck("Mamba-Mama 2", 12, 12, "Super", 1972));
trucks.push(new Truck("Mot Wheels Unlimited", 12, 12, "Super", 1972));
trucks.forEach((e)=>trucksContainer.innerHTML += e.output());

let bicycles: Bicycle[] = [];
bicycles.push(new Bicycle("Drahtesel", 12, 12, "Super", 1972));
bicycles.push(new Bicycle("Drahtesel-300", 12, 12, "Super", 1972));
bicycles.push(new Bicycle("Drahtesel-Mama", 12, 12, "Super", 1972));
bicycles.push(new Bicycle("Drahtesel-Mama 2", 12, 12, "Super", 1972));
bicycles.push(new Bicycle("Drahtesel Wheels Unlimited", 12, 12, "Super", 1972));
bicycles.forEach((e)=>bicyclesContainer.innerHTML += e.output());

let motorcycles: Motorcycle[] = [];
motorcycles.push(new Motorcycle("Motor-GT", 12, 12, "Super", 1972));
motorcycles.push(new Motorcycle("Motor-FT-300", 12, 12, "Super", 1972));
motorcycles.push(new Motorcycle("Motor-Samba-Mama", 12, 12, "Super", 1972));
motorcycles.push(new Motorcycle("Motor-Samba-Mama 2", 12, 12, "Super", 1972));
motorcycles.push(new Motorcycle("Unlimited", 12, 12, "Super", 1972));
motorcycles.forEach((e)=>motorcyclesContainer.innerHTML += e.output());