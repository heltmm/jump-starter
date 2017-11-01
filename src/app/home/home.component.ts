import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  timeLeft(project) {
    let diff = Math.floor(((project.startDate - project.goalDate)/1000)/86400)
    return diff;
  }

  shortDescription(project) {
    let short;
    if (project.name.length + project.description.length > 80) {
      short = project.description.substring(0,80-(project.name.length)) + "..."
    }
    else {
      short =  project.description;
    }
    return short;
  }

}
