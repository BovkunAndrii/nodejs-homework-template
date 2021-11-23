const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { contactShema } = require("../../schemas");

const validateMiddleware = validation(contactShema);

const router = express.Router();

router.get("/", validateMiddleware, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", validateMiddleware, ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.delete("/:contactId", validateMiddleware, ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validateMiddleware, ctrlWrapper(ctrl.updateById));

module.exports = router;
