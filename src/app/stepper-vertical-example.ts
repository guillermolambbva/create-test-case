import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';

export interface InfoAdicional {
  titulo: string;
  descripcion: number;
  resultado: number;
  attachments: Array<string>;
}

@Component({
  selector: 'stepper-vertical-example',
  templateUrl: 'stepper-vertical-example.html',
  styleUrls: ['stepper-vertical-example.css'],
})
export class StepperVerticalExample {
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

  constructor(private _formBuilder: FormBuilder) {}
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
