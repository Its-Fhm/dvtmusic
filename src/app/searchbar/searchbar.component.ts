import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/interfaces';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})

export class SearchBarComponent implements OnInit {
  @ViewChild('input', { static: true }) input!: ElementRef;
  textSearch = '';
  artistResults: Artist[] = [];
  constructor(private deezerService: DeezerService) { }

  startSearch(){
    this.deezerService.startSearch(this.textSearch).subscribe(({ data }: any) => {
      this.artistResults = data;
      });
  }

  ngOnInit(): void {
  }

}

