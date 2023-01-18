import Koa from 'koa';

import userRouter from './src/api/user/user.routes';

const app = new Koa();

app.use(userRouter.routes());

export default app;
