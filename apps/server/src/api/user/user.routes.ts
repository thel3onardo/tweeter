import Router from 'koa-router';

const router = new Router({
  prefix: '/api/user'
});

router.get('/', (ctx, next) => {
  ctx.body = 'Hi from userdfsssss';
});

export default router;
