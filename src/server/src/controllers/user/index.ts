import _delete from './delete.js';
import create from './create.js';
import read from './read.js';
import update from './update.js';

export default () => {
    return {
        create,
        read,
        update,
        delete: _delete,
    };
};
