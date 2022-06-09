const validationAge = (req, res, next) => {
  const {age} = req.body;
  if(age < 17){
    res.status(401).json({ "message": "Unauthorized" })
  };
  next();
};

module.exports = validationAge;