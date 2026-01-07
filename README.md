# A TypeScript Node.js Starter <!-- omit in toc -->
- [Testing the AX client](#testing-the-ax-client)
  - [Prepare](#prepare)
  - [Edit the code](#edit-the-code)
  - [Run the script](#run-the-script)
- [Available functions to date](#available-functions-to-date)
  - [Datasets](#datasets)
  - [Experiments](#experiments)
  - [Projects](#projects)


## Testing the AX client

### Prepare

1. Run `npm install`
2. Create a `.env` file in the root directory and add your environment variables as needed.
   - You will certainly need an `ARIZE_API_KEY` to test the Arize client.

### Edit the code

The file to edit for your test is `src/index.ts`. Please explore the available functions using intelliSense and call each function to test its functionality. See the [available functions](#available-functions-to-date) to test.

### Run the script

To run the script you edited and see the output you can:
- `npm run dev`, or
- `tsx src/index.ts`

## Available functions to date

### Datasets

- `listDatasets`
- `getDataset`
- `createDataset`
- `deleteDataset`
- `listDatasetExamples`
- `appendDatasetExamples`
- `updateDatasetExamples`

### Experiments

- `listExperiments`
- `getExperiment`
- `createExperiment`
- `deleteExperiment`
- `listExperimentRuns`

### Projects

- `listProjects`
- `getProject`
- `createProject`
- `deleteProject`
