import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-examples',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],

  templateUrl: './input-examples.component.html',
  styleUrl: './input-examples.component.scss',
})
export class InputExamplesComponent {}
