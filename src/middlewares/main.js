export const checkLogIn = (req, res, next) => {
  next();
};

export const checkAdmin = (req, res, next) => {
  next();
};

export const uploadPicture = (req, res, next) => {
  next();
};

export const jugadorValidator = (req, res, next) => {
  const { _id, name, goles, descripcion } = req.body;
  if (!_id && name && goles && descripcion) {
    return next();
  } else {
    return res.status(400).json({ msg: 'error de validacion' });
  }
};
