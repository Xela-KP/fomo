import _create from './create.js';
import _delete from './delete.js';
import _read from './read.js';
import updateAbout from './updateAbout.js';
import updateBio from './updateBio.js';
import updateLinks from './updateLinks.js';
import updateProfilePicture from './updateProfilePicture.js';

export default () => {
    return {
        create: _create,
        read: _read,
        updateAbout,
        updateBio,
        updateLinks,
        updateProfilePicture,
        delete: _delete,
    };
};
