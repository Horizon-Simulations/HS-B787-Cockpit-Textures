const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            version: require('./fragmenter_version').version,
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            baseDir: './build/horizonsim-787-Cockpit-Textures',
            outDir: './build/build-modules',
            modules: [{
                name: 'Asobo_Textures',
                sourceDir: './SimObjects/Airplanes/Asobo_B787_10/texture'
            }, {
                name: '788_Textures',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_8_SHARED/texture'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./build/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();