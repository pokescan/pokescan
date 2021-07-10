import { Component, OnInit } from '@angular/core';
import { loadingFor } from '@ngneat/loadoff';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { SPINNER_NAME } from '@shared/constants';
import { NgxSpinnerService } from 'ngx-spinner';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  loader = loadingFor(SPINNER_NAME);

  constructor(
    translateService: TranslateService,
    private spinnerService: NgxSpinnerService
  ) {
    translateService.setDefaultLang(navigator.language.substring(0, 2));
  }

  ngOnInit(): void {
    this.spinnerService
      .getSpinner(SPINNER_NAME)
      .pipe(untilDestroyed(this), this.loader.spinner.track())
      .subscribe();
  }
}
