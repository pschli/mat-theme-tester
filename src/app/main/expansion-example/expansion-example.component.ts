import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-expansion-example',
  imports: [MatExpansionModule, MatCheckboxModule, FormsModule],
  templateUrl: './expansion-example.component.html',
  styleUrl: './expansion-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionExampleComponent {
  readonly panelOpenState = signal(false);
}
