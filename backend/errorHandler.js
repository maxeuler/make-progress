exports.catchErrors = fn =>
  function(req, res, next) {
    fn(req, res, next).catch(next);
  };

exports.notFount = (req, res, next) => {
  const error = new Error('Page not found 🤷🏼‍');
  error.status = 404;
  next();
};
