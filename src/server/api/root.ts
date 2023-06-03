import { userRouter } from "~/server/api/routers/user";
import { createTRPCRouter } from "~/server/api/trpc";
import { assetRouter } from "./routers/asset";
import { mutualFundRouter } from "./routers/mutualfund";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  asset: assetRouter,
  mutualFund: mutualFundRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
