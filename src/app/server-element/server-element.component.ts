import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('aliasElement') element: {
    name: string;
    type: string;
    content: string;
  };
  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
}
