import { Component } from '@angular/core';
import { IExperiences } from './experience.model' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Yuri';

  public animal = '';

  public animales: string[] = [
    'Perro',
    'Gato',
    'Oso',
    'Pato'
  ];

  public experiences: Array<IExperiences> = [
    {
        id: 1,
        image: 'https://a0.muscache.com/im/pictures/f3f1ac58-66b0-4d52-b754-a3b112431e52.jpg',
        description: 'Casa de descando',
        place: 'Santa Elena',
        price: '300.000'
    },
    {
        id: 2,
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/3a/bd/fe.jpg',
        description: 'Parapente',
        place: 'Chicamocha',
        price: '270.000'
    },
    {
        id: 3,
        image: 'https://i2.wp.com/parquestematicos.com/wp-content/uploads/2020/01/disneylandpark2020.jpeg',
        description: 'Disney Fotos',
        place: 'Cali',
        price: '1,800.000'
    },
    {
        id: 4,
        image: 'https://miro.medium.com/max/2560/1*_bfBYAoHLR3WsLWhLenw0A.jpeg',
        description: 'Glamping',
        place: 'Retiro',
        price: '49.000'
    },
    {
        id: 5,
        image: 'https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar-palmera-coco-isla-paradisiaca_74190-2206.jpg',
        description: 'Vacaciones en plata',
        place: 'Capuganá'
    }
  ];

  addAnimal(): void {
    this.animales.push(this.animal);
    this.animal = '';
  }

  removeAnimal(index: number): void {
    this.animales.splice(index, 1);
  }

}
