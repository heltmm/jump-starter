import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserFilterPipe} from '../user-filter.pipe'
import * as firebase from "firebase";

@Component({
  selector: 'filtered-component',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css'],
  providers: [ProjectService]
})
export class FilteredComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  private user;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  timeLeft(project) {
    let diff = Math.floor(((project.startDate - project.goalDate)/1000)/86400)
    return diff;
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
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

  goToDetailPage(project) {
    this.router.navigate(['project', project.$key]);
  }

  percent(project) {
    return (project.currentFunding) / (project.goalFunding) * 100 + "%";
  }
}
