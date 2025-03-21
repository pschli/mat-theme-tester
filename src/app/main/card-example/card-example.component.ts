import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-example',
  imports: [MatCardModule, MatButtonModule],

  templateUrl: './card-example.component.html',
  styleUrl: './card-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExampleComponent {}
