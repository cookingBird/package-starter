const program = require('commander');
const chalk = required("chalk");
program
  .command('template')
  .argument('<templateName>', 'template name')
  .argument('[outputPath]', 'output path', './')
  .description('start a project by template')
  .action((template, path) => {
    try {
      require('../lib/template')(template, path);
    } catch (error) {
      console.log();
      if (error instanceof Error) {
        console.log(chalk.red(error.message));
      } else {
        console.log(error);
      }
      process.exit(1)
    }
  })

program
  .requiredOption('-t, --template, --temp <template>', 'template name')
  .option('-o, --output <output>', 'output path', './')
  .action((options) => {
    try {
      require('../lib/template')(options.template, options.path);
    } catch (error) {
      console.log();
      if (error instanceof Error) {
        console.log(chalk.red(error.message));
      } else {
        console.log(error);
      }
      process.exit(1)
    }
  })

program
  .action(() => {
    try {
      require('../lib/create')();
    } catch (error) {
      console.log();
      if (error instanceof Error) {
        console.log(chalk.red(error.message));
      } else {
        console.log(error);
      }
      process.exit(1)
    }
  })


program.parse(process.argv);
