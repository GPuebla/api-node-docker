import mongoose from "mongoose";

const validateRefs = (refMap, location = "body") => {
  return async (req, res, next) => {
    const data = req[location];
    const errors = [];

    for (const field in refMap) {
      const Model = refMap[field];
      const value = data[field];

      if (!value) continue;

      if (Array.isArray(value)) {
        for (const id of value) {
          if (!mongoose.Types.ObjectId.isValid(id)) {
            errors.push({
              field,
              message: `Invalid ObjectId inside ${field}`,
            });
            continue;
          }

          const exists = await Model.exists({ _id: id });

          if (!exists) {
            errors.push({
              field,
              message: `Referenced document not found for ${field}: ${id}`,
            });
          }
        }
      }

    
      else {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          errors.push({
            field,
            message: `${field} is not a valid ObjectId`,
          });
          continue;
        }

        const exists = await Model.exists({ _id: value });

        if (!exists) {
          errors.push({
            field,
            message: `${field} does not exist`,
          });
        }
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        message: "Reference validation error",
        errors,
      });
    }

    next();
  };
};

export default validateRefs;
