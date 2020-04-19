import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-card',
  templateUrl: './bootstrap-card.component.html',
  styleUrls: ['./bootstrap-card.component.css']
})
export class BootstrapCardComponent implements OnInit {
  @Input() head:string;
  @Input() body:string;

  constructor() { }

  ngOnInit(): void {
  }

}
