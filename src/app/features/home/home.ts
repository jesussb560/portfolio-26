import { Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';
import { ContactActions } from '../contact-actions/contact-actions';
import {Projects} from '../projects/projects';
import {Stack} from '../stack/stack';

@Component({
  selector: 'app-home',
  imports: [Container, ContactActions, Projects, Stack],
  standalone: true,
  templateUrl: './home.html',
})
export class Home {

}
