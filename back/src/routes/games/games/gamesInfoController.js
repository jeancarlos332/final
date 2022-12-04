const {
  saveInformationGamesOps,
  getInformationGamesOps,
  putInformationGamesOps,
  deleteInformationGamesOps,
} = require("./infoGamesOps");

module.exports = {
  async saveGamesInfoController(req, res, next) {
    try {
      const { body } = req;
      const result = await saveInformationGamesOps(req.getConnection, body);
      res.status(201).json({
        success: true,
        body,
        message: "Información asignada correctamente.",
      });
    } catch (error) {
      next(error);
    }
  },

  async getGamesInfoController(req, res, next) {
    try {
      const result = await getInformationGamesOps(req.getConnection);
      if (!result.length) {
        throw new Error("No hay información acerca de este juego.");
      }
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  async putGamesInfoController(req, res, next) {
    try {
      const title = req.body.title;
      const description = req.body.description;
      const category = req.body.category;
      const id = req.body.id;
      const result = await putInformationGamesOps(
        req.getConnection,
        title,
        description,
        category,
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

  async deleteGamesInformationController(req, res, next) {
    try {
      const { id } = req.params;
      const result = await deleteInformationGamesOps(req.getConnection, id);

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
