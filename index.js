'use strict';

import AccordionComponentsDev from './src';
import AccordionComponentsProd from './lib';

if (process.env.NODE_ENV === 'production') {
    module.exports = AccordionComponentsProd;
} else {
    module.exports = AccordionComponentsDev;
}