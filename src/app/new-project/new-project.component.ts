import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import * as firebase from "firebase";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})

export class NewProjectComponent implements OnInit {
  private user;

  constructor(private projectService: ProjectService) { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  submitForm(name: string, category: string, description: string, image: string, goalFunding: number, goalDate: number) {
    let newProject: Project = new Project(name, category, description, image, this.user.displayName, goalFunding, goalDate, this.user.email);
    this.projectService.addProject(newProject);
  }
  ngOnInit(){}
}
