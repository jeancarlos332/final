const middlewareErrors = (error, req, res, next) => {
  res.status(400).json({
    success: false,
    error: "Bad request",
    message: error.message,
    path: error.path,
  });

  res.status(401).json({
    success: false,
    error: "Unauthorized",
    message: error.message,
    path: error.path,
  });

  res.status(403).json({
    success: false,
    error: "Forbidden",
    message: error.message,
    path: error.path,
  });

  res.status(404).json({
    success: false,
    error: "Not Found",
    message: error.message,
    path: error.path,
  });

  res.status(500).json({
    success: false,
    error: "Internal Server Error",
    message: error.message,
    path: error.path,
  });

  res.status(502).json({
    success: false,
    error: "Bad Gateway",
    message: error.message,
    path: error.path,
  });

};

module.exports = middlewareErrors;
