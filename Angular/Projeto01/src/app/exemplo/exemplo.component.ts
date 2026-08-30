import {
  Component,
  signal,
  effect,
  Input,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.css',
})
export class ExemploComponent {
  public titulo = signal<string | number>('OK');

  @Input() txtTitulo: string = '';
  @Input('sub') subtitulo: string = '';
  @Input({
    alias: 'texto',
    required: true,
  })
  texto: string = '';

  constructor() {
    // effect(() => {
    //   console.log(`Alteração do titulo: ${this.titulo()}`);
    // });
    console.log(`constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Onchanges: `, changes['texto'].currentValue);
  }

  ngOnInit(): void {
    console.log(`OnInit`);
  }

  ngOnDestroy(): void {
    console.log(`OnDestroy`);
  }

  // updateTitulo() {
  //   this.titulo.update((value) => {
  //     return `${value} OK`;
  //   });
  // }
}
