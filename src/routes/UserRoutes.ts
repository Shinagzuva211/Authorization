import { Router } from 'express';
import { userController } from '../controllers/UserController';
import { requireAdmin } from '../middlewares/auth';

const router = Router();

router.post('/register', userController.create);
router.post('/login', userController.login);

// Faqat admin (JWT bilan himoyalangan)
router.get('/', requireAdmin, userController.getAll);
router.get('/:id', requireAdmin, userController.getById);
router.put('/:id', requireAdmin, userController.update);
router.delete('/:id', requireAdmin, userController.delete);

export default router;
