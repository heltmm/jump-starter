import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay = null;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
  });
  this.projectToDisplay = this.projectService.getProjectById(this.projectId);
 }

 percent(project) {
   return (project.currentFunding) / (project.goalFunding) * 100 + "%";
 }

 timeLeft(project) {
   let diff = Math.floor(((project.startDate - project.goalDate)/1000)/86400)
   return diff;
 }
}
