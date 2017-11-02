import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from "firebase";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  private user;
  projectId: string;
  projectToDisplay = null;
  edit = null;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
  });
  this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
     this.projectToDisplay = dataLastEmittedFromObserver;
   })
 }

 percent(project) {
   return (project.currentFunding) / (project.goalFunding) * 100 + "%";
 }

 timeLeft(project) {
   let diff = Math.floor(((project.startDate - project.goalDate)/1000)/86400)
   return diff;
 }

 beginDeletingProject(projectToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.projectService.deleteProject(projectToDelete);
      this.router.navigate(['']);
    }
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  beginEditingProject(){
    this.edit = true;
  }
  switchEdit(status){
    this.edit = status;

  }


}
