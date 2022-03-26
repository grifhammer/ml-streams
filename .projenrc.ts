import { awscdk, web } from "projen";
import { TurborepoProject } from "projen-turborepo";
const project = new TurborepoProject({
	defaultReleaseBranch: "main",
	devDeps: ["projen-turborepo"],
	name: "ml-streams",
	projenrcTs: true,
	projectReferences: true,
	vscodeMultiRootWorkspaces: true,
	parallelWorkflows: true,

	description: "A machine vision video streaming project",
	// packageName: undefined,  /* The "name" in package.json. */
});

new web.ReactTypeScriptProject({
	parent: project,
	defaultReleaseBranch: "main",
	name: "web-frontend",
	outdir: "web",
});

new awscdk.AwsCdkTypeScriptApp({
	parent: project,
	defaultReleaseBranch: "main",
	name: "ml-streams-backend",
	outdir: "backend/infra",
	cdkVersion: "2.17.0",
});
project.synth();
