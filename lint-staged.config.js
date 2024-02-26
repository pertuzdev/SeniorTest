module.exports = {
  '**/*.+(ts|tsx)': files => {
    //Building the array to validate each typescript file
    return files.map(
      file =>
        `npx tsc-files --noEmit -p tsconfig.json ${file} ./src/declarations.d.ts`,
    );
  }, //Adding prettier for all this files
  '**/*.+(js|jsx|ts|tsx|css|less|scss|md|json)': ['prettier --write'],
};
