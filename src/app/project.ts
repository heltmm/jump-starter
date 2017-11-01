export class Project {
  currentFunding: number = 0;
  startDate: number = Date.now();
  constructor(public name: string, public category: string, public description: string, public image: string, public author: string, public goalFunding: number, public goalDate: number) { }
}
