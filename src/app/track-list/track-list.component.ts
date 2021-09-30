import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from '../models/interfaces';
import { DeezerService } from '../services/deezer.service';

const ELEMENT_DATA: Track [] = [];

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})


export class TrackListComponent implements OnInit {
  artistID: string = '';

  displayedColumns: string[] = ['position','title','duration'];
  dataSource = ELEMENT_DATA;

  constructor(private activeRoute: ActivatedRoute, private deezerService: DeezerService) {
    this.artistID = this.activeRoute.snapshot.params['id'];
      this.deezerService.artistTopTracks(this.artistID).subscribe(({data}: any) => {
        this.dataSource = data;
      });

  }

  ngOnInit(): void {
  }

}
