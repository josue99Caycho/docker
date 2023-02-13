const { Router } = require(`express`)
const router = Router();

const User = require(`../controller/user`);

router.get(`/all`, async (req, resp) =>  await new User().findAll(req, resp));

router.get(`/email`, async (req, resp) =>  await new User().findByEmail(req, resp));

router.post(`/`, async (req, resp) => await new User().Create(req, resp));

module.exports = router


