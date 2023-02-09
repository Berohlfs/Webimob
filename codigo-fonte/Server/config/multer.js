import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';
// files

// outros storages que são suportados: (servidores)
// aws s3
// digital ocean spaces
// google

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', 'tmp', 'uploads'),
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) {
          return callback(err);
        }
        // file.originalname;
        return callback(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
