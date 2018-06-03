export class Hero {
    name: string;
    power: string;
    master: string;

    constructor(name: string, power: string) {
        this.name = name;
        this.power = power;
    }
}
export const HEROES = [
  new Hero('Saitama', 'lol udk?'),
  new Hero('Windstorm', 'wind'),
  new Hero('Blast', 'explosions'),
];
