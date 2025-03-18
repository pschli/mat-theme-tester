import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from "@angular/material/divider";


@Component({
  selector: 'app-main',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
