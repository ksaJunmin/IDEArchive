import jwt from 'jsonwebtoken';
const secretKey = 'cirjpscrmiw30lsciojm4po5i4';

export const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Access token missing' });
    }

    const user = await new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });

    req.user = user;
    next();
  } catch (err) {
    console.error('Error authenticating token:', err);
    return res.status(403).json({ message: 'Invalid token' });
  }
};
