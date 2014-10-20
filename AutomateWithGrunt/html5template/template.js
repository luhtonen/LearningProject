'use strict';
exports.description = 'Create an HTML5 template with CSS and JavaScript files';
exports.notes = 'This project includes a default JavaScript and CSS file. ' +
                'In addition, you can choose to include an optional Gruntfile and some default CSS styles';

exports.template = function(grunt, init, done) {
  init.process({}, [
    // input prompt go here

    // Prompt for those values
    init.prompt('name', 'AwesomeCo'),
    init.prompt('author', 'Max Power'),
    init.prompt('main', 'index.html'),
    {
      name: 'gruntfile',
      message: 'Do you want a Gruntfile?',
      default: 'Y/n',
      warning: 'If you want to be able to do cool stuff you should have one.'
    }
  ], function(err, props) {
    // processing section
    props.gruntfile = /y/i.test(props.gruntfile);

    var files = init.filesToCopy(props);
    if (props.gruntfile) {
      props.devDependencies = {
        'grunt': '~0.4.5'
      };
    } else {
      delete files['Gruntfile.js'];
    }
    init.copyAndProcess(files, props);

    init.writePackageJSON('package.json', props);

    done();
  });
};