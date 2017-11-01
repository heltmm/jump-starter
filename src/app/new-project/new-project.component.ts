import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})

export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  submitForm(name: string, category: string, description: string, image: string, author: string, goalFunding: number, goalDate: number) {
    let newProject: Project = new Project(name, category, description, image, author, goalFunding, goalDate);
    this.projectService.addProject(newProject);
  }
  ngOnInit(){}
}
