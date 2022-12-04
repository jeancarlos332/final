const {
    saveApiFakeOps,
    getApiFakeOps,
    updateApiFakeOps,
    deleteApiFakeOps,
  } = require("./apifakeOps");
  
  module.exports = {
    async saveApiFakeController(req, res, next) {
      try {
        const { body } = req;
        const result = await saveApiFakeOps(req.getConnection, body);
        res.status(201).json({
          success: true,
          body,
          message: "Información asignada correctamente.",
        });
      } catch (error) {
        next(error);
      }
    },
  
    async getApiFakeController(req, res, next) {
      try {
        const result = await getApiFakeOps(req.getConnection);
        if (!result.length) {
          throw new Error("No hay información acerca de esta api.");
        }
        res.status(200).json({
          success: true,
          data: result,
        });
      } catch (error) {
        next(error);
      }
    },
  
    async putApiFakeController(req, res, next) {
      try {
        const nameemployee = req.body.nameemployee;
        const identification = req.body.identification;
        const department = req.body.department;
        const id = req.body.id;
        const result = await updateApiFakeOps(
          req.getConnection,
          nameemployee,
          identification,
          department,
          id
        );
        if (req.body.id === undefined || req.body.id === 0) {
          throw new Error("No hay información.");
        }
        res.status(200).json({
          success: true,
          data: result,
          message: "Información actualizada correctamente.",
        });
      } catch (error) {
        next(error);
      }
    },
  
    async deleteApiFakeController(req, res, next) {
      try {
        const { id } = req.params;
        const result = await deleteApiFakeOps(req.getConnection, id);
  
        res.status(200).json({
          success: true,
          data: result,
          message: "Registro eliminado correctamente.",
        });
      } catch (error) {
        next(error);
      }
    },
  };
  