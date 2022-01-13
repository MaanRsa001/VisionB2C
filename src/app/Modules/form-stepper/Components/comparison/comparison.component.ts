import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
 @Input("comparisonForm") comparisonForm!: FormGroup;
 toppings = new FormControl();

 toppingList: string[] = ['Zero Depreciation', 'Engine Protection Cover', 'NCB Protector', 'Key & Lock Replacement', 'Consumables', '24x7 Roadside AssistanceAn'];
  constructor() { }






  ngOnInit(): void {
  }

}
