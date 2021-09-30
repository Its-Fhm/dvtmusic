import { Component, OnInit } from '@angular/core';
import { DeezerService } from './services/deezer.service';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  loading$ = this.loader.loading$;

  constructor(public deezerService: DeezerService, public loader: LoaderService) { }

  ngOnInit() {

  }


}
