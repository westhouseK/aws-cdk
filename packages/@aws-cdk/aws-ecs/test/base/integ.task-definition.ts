import * as cdk from '@aws-cdk/core';
import * as ecs from '../../lib';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'task-definition');

new ecs.TaskDefinition(stack, 'TaskDefinition', {
  compatibility: ecs.Compatibility.FARGATE,
  family: 'application',
  revision: 1,
});

app.synth();
