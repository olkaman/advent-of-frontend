export interface Tool {
  init: Function;
  update: Function;
  dispose: Function;
}

export class Equipment {
  tools: Tool[];
  initializedTools: string[];

  constructor() {
    this.tools = [];
    this.initializedTools = [];
  }

  registerTools(tool: Tool) {
    this.tools.push(tool);
  }

  initializeTools() {
    this.tools.forEach((tool, index) => {
      if (this.initializedTools[index] === `tool${index}`) throw new Error('Tool has already been initialized.');
      tool.init();
      this.initializedTools.push(`tool${index}`);
    });
  }
  updateTools() {
    this.tools.forEach((tool, index) => {
      if (this.initializedTools[index] !== `tool${index}`) throw new Error('Cannot update any tools before initialization.');
      tool.update();
    });
  }
  disposeTools() {
    this.tools.forEach((tool, index) => {
      if (this.initializedTools[index] !== `tool${index}`) throw new Error('Cannot dispose any tools before initialization.');
      tool.dispose();
    });
  }
}
