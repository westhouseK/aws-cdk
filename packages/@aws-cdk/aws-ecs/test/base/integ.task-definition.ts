import * as cdk from '@aws-cdk/core';
import * as integ from '@aws-cdk/integ-tests';
import * as ecs from '../../lib';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'task-definition');

new ecs.TaskDefinition(stack, 'TaskDefinition', {
  cpu: '512',
  memoryMiB: '512',
  compatibility: ecs.Compatibility.FARGATE,
  family: 'application',
  revision: 1,
});

new integ.IntegTest(app, 'TaskDefinitionTest', {
  testCases: [stack],
});

app.synth();
