import { Component } from '@angular/core';
import {ContactActions} from '../contact-actions/contact-actions';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [ContactActions, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
