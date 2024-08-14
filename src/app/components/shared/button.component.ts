import { Component, Input, Output, EventEmitter } from '@angular/core';

//c'est un composant reutilisable car sa fonction depend de ses parametre
@Component({
  selector: 'app-button',
  template: `
    <button
      [disabled]="CustomDisabled"
      [ngClass]="customClass"
      [type]="CustomType"
      (click)="handleClick()"
    >
      {{ ButtonName }}
     
    </button>
  `,
  styles: [
    `
    
    `,
  ],
})
export class ButtonComponent {
  //permet de passer des donné a l'enfant depuis le parent
  @Input() ButtonName!: string;
  @Input() CustomDisabled!: boolean;
  @Input() CustomType!: string;
  @Input() customClass!: string;

  //action personnalisé dis au parent qu'il ya eu changement dans l'enfants
  @Output() ActionButton = new EventEmitter();

  handleClick() {
    this.ActionButton.emit();
  }
}


/**
 * le parent ne sais pas faire mais connais
 * l'enfant sait faire mais ne connais pas
 * 
 * etape pour passer des données (parent enfant)
 * 
 * 1-utiliser le decorateur @Input() et declarer le type de la variable
 * 2-declarer l'attribut binder entree crochet ou l'affichage entre moustache (interpolation)
 * 
 * etape pour creer un eventCustom (enfant parent)
 * 1-on utilise un decorateur @Output() puis declarer une nouvelle instance de EventEmitter()
 * 2-dans la function du template choisie l'event et la methode 
 * 3-dans la methode pour creer l'eventCustom que le parent recevra on fait un this.InstanceDeLaClass.emit()
 */