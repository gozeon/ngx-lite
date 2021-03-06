import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-ngx-input-star-rating',
  templateUrl: './docs-ngx-input-star-rating.component.html'
})
export class DocsNgxInputStarRatingComponent implements OnInit {
  form: FormGroup;
  value: Observable<number>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      rating: [3.5]
    });

    this.value = this.form.controls.rating.valueChanges.pipe(startWith(3.5));
  }

  submit() {
    console.log(this.form.value);
    alert(this.form.value.rating);
  }
}
