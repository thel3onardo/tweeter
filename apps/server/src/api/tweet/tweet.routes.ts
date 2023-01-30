import Router from 'koa-router';

const router = new Router({
  prefix: '/api/tweet'
});

router.get('/test', (ctx, next) => {
  return (ctx.body = 'Testing tweet routes');
});

export default router;
