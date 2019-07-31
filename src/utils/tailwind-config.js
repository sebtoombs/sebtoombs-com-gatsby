const resolveConfig = require('tailwindcss/resolveConfig');
let customConfig = false;
try {
    customConfig = require('../../tailwind.config');
} catch(e) {

}
let config = resolveConfig(customConfig ? customConfig : null);



module.exports = config;