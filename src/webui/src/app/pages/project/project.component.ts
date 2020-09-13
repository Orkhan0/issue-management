import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/shared/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectMessage = 'Project Message';

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe(
      (resp) =>{
        console.log(resp)
      }
    );
  }

}