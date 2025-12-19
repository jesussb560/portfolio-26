import { Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';
import { ContactActions } from '../../shared/components/contact-actions/contact-actions';
import {Card} from '../../shared/ui/card/card';

@Component({
  selector: 'app-home',
  imports: [Container, ContactActions, Card],
  standalone: true,
  templateUrl: './home.html',
})
export class Home {

}
