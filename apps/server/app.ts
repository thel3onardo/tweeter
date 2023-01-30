import Koa from 'koa';

import tweetRouter from './src/api/tweet/tweet.routes';
import userRouter from './src/api/user/user.routes';

const app = new Koa();

app.use(tweetRouter.routes());
app.use(userRouter.routes());

export default app;
