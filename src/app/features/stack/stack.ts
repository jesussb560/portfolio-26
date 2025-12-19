import { Component } from '@angular/core';
import {Card} from '../../shared/ui/card/card';

@Component({
  selector: 'app-stack',
  imports: [
    Card
  ],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {

  chips = [
    {id: 'spring', labels: ['Cloud', 'Batch', 'JPA', 'Security', 'Actuator', 'Flyway', 'JUnit']},
    {id: 'aws', labels: ['ECD', 'API Gateway', 'Lambda', 'S3', 'SSM', 'SQS']},
    {id: 'front', labels: ['Hooks', 'Redux', 'Tailwind', 'Material-UI', 'React Query', 'Jest/Vitest']},
  ];

  getChips(id: string) {
    return this.chips.find(chip => id === chip.id)?.labels ?? [];
  }

}
