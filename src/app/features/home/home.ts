import { Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';
import { ContactActions } from '../contact-actions/contact-actions';
import {Projects} from '../projects/projects';
import {Stack} from '../stack/stack';
import {Experience} from '../experience/experience';

@Component({
  selector: 'app-home',
  imports: [Container, ContactActions, Projects, Stack, Experience],
  standalone: true,
  templateUrl: './home.html',
})
export class Home {

}
