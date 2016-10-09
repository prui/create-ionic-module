(function() {
    var fs = require('fs');
    var path = require('path');
    module.exports = {
        init: init
    };

    function init(name, type) {
        fs.exists(name, function(result) {
            if (!result) {
                fs.mkdirSync(name);
            }
            generateFiles(name, type);
        });
    }

    function generateFiles(name, type) {
        generateModuleJS(name, type);
        generateHtml(name, type);
        generateContorller(name, type);
        generateService(name, type);
        generateRouter(name, type);
    }

    function generateModuleJS(name, type) {
        writeFile(name, '.js', 'ModuleJS', type);
    }

    function generateHtml(name, type) {
        writeFile(name, '.html', 'Html', type);
    }

    function generateContorller(name, type) {
        writeFile(name, 'Ctrl.js', 'Contorller', type);
    }

    function generateService(name, type) {
        writeFile(name, 'Service.js', 'Service', type);
    }

    function generateRouter(name, type) {
        writeFile(name, 'Router.js', 'Router', type);
    }

    function writeFile(name, suffix, tag, type) {
        if (tag == 'Router' && type == 'ionSideMenus') {
            var temp = fs.readFileSync(path.resolve(__dirname, '..', 'template', 'Base' + suffix));
        } else {
            var temp = fs.readFileSync(path.resolve(__dirname, '..', 'template', 'Base' + suffix));
        }
        // var temp = fs.readFileSync(path.resolve(__dirname, '..', 'template', 'Base' + suffix));
        var newFileText = temp.toString().replace(/Base/g, name);

        if (tag == 'Router') {
            var lowerCaseName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
            if (lowerCaseName[0] == '-')
                lowerCaseName = lowerCaseName.replace('-', '');
            newFileText = newFileText.replace('/base', "/" + lowerCaseName);
        }

        fs.writeFile(name + '/' + name + suffix, newFileText, function(err) {
            if (err) {
                return console.error(err);
            }
            console.log(tag + "写入成功！");
        });
    }



})();
