import { Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';
import {Projects} from '../projects/projects';
import {Stack} from '../stack/stack';
import {Experience} from '../experience/experience';
import {Footer} from '../footer/footer';
import {About} from '../about/about';

@Component({
  selector: 'app-home',
  imports: [Container, Projects, Stack, Experience, Footer, About],
  standalone: true,
  templateUrl: './home.html',
})
export class Home {

}
