import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';

interface TestStep {
  title: string;
  description: string;
  order: number;
}

enum TestType {
  Unit,
  Mutation,
  Manual,
  Integration,
  Load,
  Performance,
  Acceptance,
}

interface TestCase {
  title: string;
  description: string;
  testType: TestType;
  testSteps?: TestStep[];
}

const TEST_CASES: TestCase[] = [
  {
    title: 'Test de login',
    description: 'hacer click sobre el icono de Chrome',
    testType: TestType.Acceptance,
  },
  {
    title: 'Test de Performance',
    description: 'hacer click sobre el icono de Chrome',
    testType: TestType.Acceptance,
  },
  {
    title: 'Test de Validacion',
    description: 'hacer click sobre el icono de Chrome',
    testType: TestType.Acceptance,
  },
];

export interface TestData {
  clave: string;
  valor: string;
}

const ELEMENT_DATA: TestData[] = [
  { clave: 'usuario', valor: 'Hydrogen' },
  { clave: 'entorno', valor: 'PRE' },
  { clave: 'repeticiones', valor: '5' },
];

@Component({
  selector: 'stepper-vertical-example',
  templateUrl: 'stepper-vertical-example.html',
  styleUrls: ['stepper-vertical-example.css'],
})
export class StepperVerticalExample {
  displayedColumns: string[] = ['clave', 'valor'];
  dataSource = ELEMENT_DATA;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  uploadFileForm = new FormGroup({
    fileName: new FormControl(null),
  });
  upload(file: any) {
    console.log(file);
  }
  panelOpenState = false;

  tests = TEST_CASES;
  drop(event: CdkDragDrop<TestCase[]>) {
    moveItemInArray(this.tests, event.previousIndex, event.currentIndex);
  }

  constructor(private _formBuilder: FormBuilder) {}
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
