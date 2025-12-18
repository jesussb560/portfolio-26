import { Component } from '@angular/core';
import { Container } from '../../shared/container/container';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-home',
  imports: [Container, Button],
  standalone: true,
  templateUrl: './home.html',
})
export class Home {

}
