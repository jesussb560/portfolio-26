import { Component } from '@angular/core';
import {ContactActions} from '../contact-actions/contact-actions';

@Component({
  selector: 'app-introduction',
  imports: [ContactActions],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction {

}
