"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
router.post('/register', UserController_1.userController.create);
router.post('/login', UserController_1.userController.login);
router.get('/', UserController_1.userController.getAll);
router.get('/:id', UserController_1.userController.getById);
router.put('/:id', UserController_1.userController.update);
router.delete('/:id', UserController_1.userController.delete);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map