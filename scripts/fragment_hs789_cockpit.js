const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            baseDir: './horizonsim-787-Cockpit-Textures/build/horizonsim-787-Cockpit-Textures',
            outDir: './horizonsim-787-Cockpit-Textures/build/build-modules',
            modules: [{
                name: 'Asobo Textures',
                sourceDir: './SimObjects/Airplanes/Asobo_B787_10/texture'
            }, {
                name: 'Kuro Textures',
                sourceDir: './SimObjects/Airplanes/Kuro_B787_8/texture'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./horizonsim-787-Cockpit-Textures/build/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();