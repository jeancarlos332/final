const {
  saveEmployeeOps,
  listEmployeeOps,
  putEmployeeOps,
  deleteEmployeeOps,
} = require("./employeesOps");

module.exports = {
  async saveEmployeesController(req, res, next) {
    try {
      const { body } = req;
      const result = await saveEmployeeOps(req.getConnection, body);
      res.status(201).json({
        success: true,
        body,
        message: "Información asignada correctamente.",
      });
    } catch (error) {
      next(error);
    }
  },

  async getEmployeesController(req, res, next) {
    try {
      const result = await listEmployeeOps(req.getConnection);
      if (!result.length) {
        throw new Error("No hay información acerca de este empleado.");
      }
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  async putEmployeesController(req, res, next) {
    try {
      const nameemployee = req.body.nameemployee;
      const identification = req.body.identification;
      const department = req.body.department;
      const id = req.body.id;
      const result = await putEmployeeOps(
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

  async deleteEmployeesController(req, res, next) {
    try {
      const { id } = req.params;
      const result = await deleteEmployeeOps(req.getConnection, id);

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
